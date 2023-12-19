type DiffChunks = {
  chunks: Chunk[];
};

type Chunk = {
  files: Files;
  headers: Headers;
  lines: string[];
}

type Files = {
  from: string;
  to: string;
}

type Headers = {
  descriptors: string[];
  lineChanges: string;
}


export default function ParseDiff(gitDiff: string): DiffChunks {
  const diffChunks: string[] = gitDiff.split('diff --git');
  let files: Files = { from: '', to: '' }
  let headers = {}; 
  let lines: string[] = [];


  const parsedDiff: DiffChunks = { chunks: [] };
  return parsedDiff;
};