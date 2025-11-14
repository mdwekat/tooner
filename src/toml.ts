/**
 * TOML <-> TOON converter
 */
import { parse } from '@iarna/toml';
import { encode as encodeCore } from './core/encoder.js';
import { decode as decodeCore } from './core/decoder.js';
import type { EncodeOptions, DecodeOptions, ToonValue } from './core/types.js';

/**
 * Encode TOML string to TOON format
 */
export function encode(toml: string, options?: EncodeOptions): string {
  const obj = parse(toml) as ToonValue;
  return encodeCore(obj, options);
}

/**
 * Decode TOON format to TOML string
 * Note: TOML stringification not implemented yet
 */
export function decode(toon: string, options?: DecodeOptions): string {
  const obj = decodeCore(toon, options);
  // TOML stringification not implemented yet
  return JSON.stringify(obj);
}
