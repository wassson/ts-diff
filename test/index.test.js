import { describe, expect, test, toEqual } from 'vitest'
import fs from 'fs'
import ParseDiff from '../src/index.ts'

describe('index', () => {
  // this should be async or wrapped in try catch but 🤷🏻‍♂️
  const data = fs.readFileSync('test-pr.txt', 'utf8');

  test('ParseDiff is a function', () => {
    expect(typeof ParseDiff).toBe('function')
  })

  test('ParseDiff returns an object', () => {
    expect(typeof ParseDiff(data)).toBe('object')
  })

  test('ParseDiff returns an object with the correct keys', () => {
    expect(Object.keys(ParseDiff(data))).toEqual(['chunks'])
  })

  test('Diff line count', () => {
    expect(ParseDiff(data).chunks.length).toEqual(3)
  })
})