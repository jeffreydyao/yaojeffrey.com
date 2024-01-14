import dayjs from "dayjs";
import fs from "fs";
import path from "path";

interface PostMetadata {
  /** The title of the post. */
  title: string;
  /** A 1-2 sentence summary of the post. */
  summary: string;
  /** Date that the post was published on. */
  publishedAt: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match?.[1] ?? "";

  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<PostMetadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof PostMetadata] = value;
  });

  return { metadata: metadata as PostMetadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(path: string) {
  let rawContent = fs.readFileSync(path, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getBlogPost(_path: string) {
  let filePath = path.join(CONTENT_DIR, _path);
  let slug = path.basename(_path, path.extname(_path));
  let { metadata, content } = readMDXFile(filePath);
  return { metadata, content, slug };
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => getBlogPost(file));
}

/** Sorted from latest to earliest */
export function getBlogPosts() {
  let posts = getMDXData(CONTENT_DIR);
  return posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export function parseDateToString(date: string) {
  return dayjs(date).format("MMM D, YYYY");
}
