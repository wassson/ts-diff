type DiffChunks = {
  chunks: Chunk[]
}

type Chunk = {
  files: Files
  headers: Headers
  lines: string[]
}

type Files = {
  from: string
  to: string
}

type Headers = {
  lineChanges: string
  descriptors: string[]
}


export default function ParseDiff(gitDiff: string): DiffChunks {
  const diffLines: string[] = gitDiff.split('\n')
  const diffChunks: Chunk[] = []
  let chunkCount: number = -1

  for (let i = 0; i < diffLines.length; i++) {
    if (diffLines[i].startsWith('diff')) {
      chunkCount++
      const chunk: Chunk = createChunk(diffLines[i])
      diffChunks.push(chunk)
    }
  }

  console.log(diffChunks)

  const parsedDiff: DiffChunks = { chunks: diffChunks }
  return parsedDiff
};

function createChunk(line: string): Chunk {
  const files: Files = splitFiles(line)
  const chunk: Chunk = {
    files: { from: files.from, to: files.to },
    headers: { lineChanges: '', descriptors: [] },
    lines: [],
  }
  return chunk
}

function splitFiles(line: string): Files {
  const files: Files = {
    from: line.split(' ')[2],
    to: line.split(' ')[3],
  };
  return files
}
