import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const rootDir = path.resolve(process.cwd(), "..");
const dbPath = path.join(rootDir, "saved_runs.db");
const outputPath = path.join(process.cwd(), "src", "generated", "catalog-data.ts");

function parseJson(value) {
  if (value == null) return null;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function mapRun(row) {
  return {
    id: row.id,
    run_id: row.run_id,
    title: row.title,
    gene_symbol: row.gene_symbol ?? null,
    disease_id: row.disease_id ?? null,
    objective: row.objective ?? null,
    summary_markdown: row.summary_markdown ?? null,
    scored_target: parseJson(row.scored_target),
    final_dossier: parseJson(row.final_dossier),
    evidence_graph: parseJson(row.evidence_graph),
    created_at: new Date(row.created_at).toISOString(),
    updated_at: new Date(row.updated_at).toISOString(),
  };
}

function mapComparison(row) {
  return {
    id: row.id,
    run_a_id: row.run_a_id,
    run_b_id: row.run_b_id,
    title: row.title,
    compare_markdown: row.compare_markdown ?? null,
    data_snapshot: parseJson(row.data_snapshot),
    created_at: new Date(row.created_at).toISOString(),
  };
}

if (!fs.existsSync(dbPath)) {
  throw new Error(`SQLite database not found at ${dbPath}`);
}

const db = new Database(dbPath, { readonly: true });

const runs = db
  .prepare(
    `
      SELECT id, run_id, title, gene_symbol, disease_id, objective,
             summary_markdown, scored_target, final_dossier, evidence_graph,
             created_at, updated_at
      FROM saved_runs
      ORDER BY datetime(created_at) DESC, datetime(updated_at) DESC
    `
  )
  .all()
  .map(mapRun);

const comparisons = db
  .prepare(
    `
      SELECT id, run_a_id, run_b_id, title, compare_markdown, data_snapshot, created_at
      FROM saved_comparisons
      ORDER BY datetime(created_at) DESC
    `
  )
  .all()
  .map(mapComparison);

const header = `/* eslint-disable */\n/* auto-generated from saved_runs.db - do not edit manually */\n\n`;
const body = `${header}import type { SavedComparisonDetail, SavedRunDetail } from "@/lib/types";\n\nexport const savedRuns: SavedRunDetail[] = ${JSON.stringify(runs, null, 2)};\n\nexport const savedComparisons: SavedComparisonDetail[] = ${JSON.stringify(comparisons, null, 2)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, body, "utf8");
console.log(`Wrote ${outputPath} with ${runs.length} runs and ${comparisons.length} comparisons.`);
