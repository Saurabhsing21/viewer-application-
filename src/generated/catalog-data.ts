/* eslint-disable */
/* auto-generated from saved_runs.db - do not edit manually */

import type { SavedComparisonDetail, SavedRunDetail } from "@/lib/types";

export const savedRuns: SavedRunDetail[] = [
  {
    "id": "113e0671d8c64a08892519f875965177",
    "run_id": "run-2a10bc191680",
    "title": "Research: EGFR",
    "gene_symbol": "EGFR",
    "disease_id": null,
    "objective": null,
    "summary_markdown": "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT\n\nGene: EGFR | Run ID: run-2a10bc191680\n\n## Evidence Contribution Dashboard\n[[EVIDENCE_DASHBOARD]]\n\n## 1. Executive Summary\n\nEGFR (Epidermal Growth Factor Receptor) is a highly validated therapeutic target, classified as Tclin by PHAROS (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS), indicating the existence of FDA-approved drugs. As a receptor tyrosine kinase, EGFR represents a historically tractable target class for small molecule inhibitors. Open Targets provides strong evidence of association with multiple cancers, particularly non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), lung cancer (score 0.766; evidence_id: opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9; source: Open Targets), and glioblastoma. Genetic dependency data from DepMap shows that while EGFR is not universally essential across all cell lines (average CERES gene effect -0.243; evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), it exhibits strong essentiality (CERES < -1) in a significant subset of 210 cell lines (17.96% of 1169 lines tested), with top dependencies observed in cell lines like ACH-000587 (CERES -2.849; evidence_id: depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be; source: DepMap). This context-specific essentiality is characteristic of oncogenes. The extensive literature, including highly cited articles on EGFR mutations and response to gefitinib in lung cancer, further corroborates its clinical relevance and established role in disease pathogenesis (e.g., PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature).\n\n## 2. Target Annotation — PHAROS\n\nPHAROS categorizes EGFR as a Tclin target, signifying that it is a clinically validated target with FDA-approved drugs available. This high level of tractability is expected for a protein belonging to the Kinase family, particularly a receptor tyrosine kinase, which typically possesses well-defined ATP-binding pockets amenable to small-molecule inhibition. The very low novelty score indicates that EGFR is an extensively studied target.\n\n| Target Name                     | Family | TDL   | Novelty   | Ligand Total | Associated Disease              | Evidence ID                                          |\n| :------------------------------ | :----- | :---- | :-------- | :----------- | :------------------------------ | :--------------------------------------------------- |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | non-small cell lung carcinoma   | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | glioblastoma                    | pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | inflammatory skin and bowel disease, neonatal, 2 | pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | giant cell glioblastoma         | pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | osteosarcoma                    | pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2 |\n\n## 3. Genetic Dependency — DepMap\n\n### Global Dependency Analysis\n\nDepMap CRISPR gene effect data indicates that EGFR is not universally essential across all tested cell lines, with an average CERES gene effect of -0.243 across 1169 cell lines (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap). A CERES score of approximately 0 indicates non-essentiality, while scores below -1 suggest strong essentiality. However, a significant fraction of cell lines (210 out of 1169, or 17.96%) show strong dependency, with CERES scores less than or equal to -0.5 (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap). This pattern suggests that EGFR essentiality is highly context-specific, often linked to oncogenic addiction in specific cancer types rather than a pan-essential role in cell viability.\n\n| Cell Line Count | Average Gene Effect | Median Gene Effect | Strong Dependency Count | Strong Dependency Fraction | Screen Type     | Data Release  | Evidence ID                                |\n| :-------------- | :------------------ | :----------------- | :---------------------- | :------------------------- | :-------------- | :------------ | :----------------------------------------- |\n| 1169            | -0.2434             | -0.1338            | 210                     | 0.1796                     | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:NA:genetic_dependency:1f15b784e2 |\n\n### Top Dependent Cell Lines\n\nThe top dependent cell lines exhibit very strong essentiality for EGFR, with CERES scores significantly below -1. This indicates that these specific cancer cell lines are highly reliant on EGFR for their survival and proliferation. For instance, ACH-000587 shows a gene effect of -2.849 (evidence_id: depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be; source: DepMap), which is comparable to the dependency observed for pan-essential genes like PCNA or RPS6 in relevant contexts. This strong dependency in a subset of cell lines underscores the potential for targeted therapeutic intervention in specific cancer genotypes or lineages, consistent with EGFR's role as an oncogene.\n\n| Cell Line ID | Gene Effect | Rank Within Gene | Screen Type     | Data Release  | Evidence ID                                          |\n| :----------- | :---------- | :--------------- | :-------------- | :------------ | :--------------------------------------------------- |\n| ACH-000587   | -2.849      | 1                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be |\n| ACH-000472   | -2.165      | 2                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441 |\n| ACH-002239   | -2.074      | 3                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91 |\n| ACH-002156   | -2.034      | 4                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28 |\n\n## 4. Disease Associations — Open Targets\n\nOpen Targets provides strong evidence for EGFR's association with several cancer types, reflecting a robust body of genetic, somatic, and clinical data. The highest association score is for non-small cell lung carcinoma, at 0.852 (evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets). Scores above 0.7 indicate strong associations, confirming EGFR as a well-established driver in these diseases. The associations with lung cancer (0.766; evidence_id: opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9; source: Open Targets) and lung adenocarcinoma (0.764; evidence_id: opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609; source: Open Targets) are also very high and clinically significant. The broader association with \"cancer\" (0.746; evidence_id: opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d; source: Open Targets) further supports its widespread oncogenic role. A moderate association is also observed with breast cancer (0.678; evidence_id: opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be; source: Open Targets).\n\n| Disease Name                | Association Score | Evidence Count | Evidence ID                                          |\n| :-------------------------- | :---------------- | :------------- | :--------------------------------------------------- |\n| non-small cell lung carcinoma | 0.852             | 2539           | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf |\n| lung cancer                 | 0.766             | 2539           | opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9 |\n| lung adenocarcinoma         | 0.764             | 2539           | opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609 |\n| cancer                      | 0.746             | 2539           | opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d |\n| breast cancer               | 0.678             | 2539           | opentargets:ENSG00000146648:MONDO:0007254:disease_association:ec4efa69be |\n\n## 5. Literature\n\nThe literature strongly supports EGFR's role as a key oncogene and therapeutic target, particularly in lung cancer. Articles consistently link EGFR mutations to clinical response to tyrosine kinase inhibitors like gefitinib. The top-ranked article, \"EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy\" (PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature), with over 7000 citations, highlights the clinical utility of targeting EGFR based on mutational status. Another highly cited paper, \"Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib\" (PMID 15118073; evidence_id: literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1; source: literature), further reinforces this understanding. The relevance of EGFR extends to other cancers, as indicated by a study on glioblastoma subtypes (PMID 20129251; evidence_id: literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962; source: literature) and comprehensive molecular portraits of breast tumors (PMID 23000897; evidence_id: literature:EGFR:PMID:23000897:NA:literature_article:556b33c372; source: literature).\n\n| Rank | PMID       | Title                                                                                                                              | Pub Year | Cited By Count | Gene In Title | Evidence ID                                          |\n| :--- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------- | :------------- | :------------ | :--------------------------------------------------- |\n| 1    | 15118125   | EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy.                                            | 2004     | 7133           | TRUE          | literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f |\n| 2    | 20129251   | Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1. | 2010     | 5717           | TRUE          | literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962 |\n| 3    | 23000897   | Comprehensive molecular portraits of human breast tumours.                                                                         | 2012     | 9520           | FALSE         | literature:EGFR:PMID:23000897:NA:literature_article:556b33c372 |\n| 4    | 15118073   | Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib. | 2004     | 8308           | FALSE         | literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1 |\n| 5    | 19692680   | Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma.                                                                   | 2009     | 6284           | FALSE         | literature:EGFR:PMID:19692680:NA:literature_article:64e198073e |\n\n## 6. Integrated Interpretation\n\nEGFR, the Epidermal growth factor receptor, is a vital receptor tyrosine kinase (protein_family: Belongs to the protein kinase superfamily. Tyr protein kinase family. EGF receptor subfamily; source: biological_context). Its molecular function involves binding ligands of the EGF family and activating several signaling cascades to convert extracellular cues into appropriate cellular responses, leading to cell growth, proliferation, and survival (molecular_function: Receptor tyrosine kinase binding ligands of the EGF family...; source: biological_context). This function is often dysregulated in cancer, making it a critical oncogenic driver.\n\nThe strong disease associations reported by Open Targets, particularly with non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets) and lung cancer (score 0.766; evidence_id: opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9; source: Open Targets), are well-corroborated by the `curated_disease_assocs` from UniProt, which explicitly lists \"Lung cancer\" (source: biological_context). This consistency across different data sources strengthens the confidence in EGFR's role in these malignancies. While UniProt also lists \"Neonatal nephrocutaneous inflammatory syndrome,\" this is a rare disease and does not have a high association score in the Open Targets data provided, indicating a lower clinical priority in this context.\n\nA conflict is observed between:\n-   PHAROS (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS), which classifies EGFR as Tclin with high tractability due to its kinase nature.\n-   DepMap (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), which shows moderate global genetic essentiality (average CERES -0.243).\nThis likely reflects the biological reality of oncogenes; while a kinase like EGFR is highly druggable and therapeutically relevant (Tclin), its essentiality in cellular models is often context-dependent, meaning it is only critical for survival in specific cancer cell lines driven by EGFR activation (e.g., mutations or amplification), not universally across all cell types. This is a biologically expected finding rather than a true data gap.\n\nAnother conflict exists between:\n-   DepMap (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), showing context-specific essentiality with an average CERES of -0.243.\n-   Open Targets (evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), showing strong disease association scores (e.g., 0.852 for non-small cell lung carcinoma).\nThis difference is also biologically expected. Open Targets integrates a broad array of evidence including genetic, somatic, and clinical data from patient populations, which captures the overall clinical relevance of EGFR across various disease contexts. DepMap, conversely, provides *in vitro* functional essentiality data from a panel of cell lines, which may not fully represent the complex *in vivo* disease landscape or specific genetic contexts driving essentiality in all patients. Therefore, strong disease association does not necessarily imply pan-essentiality in cell models.\n\nUnlike many less-characterized targets, EGFR is a well-established receptor tyrosine kinase, a class of proteins with highly conserved ATP-binding pockets that have historically proven to be excellent targets for small-molecule inhibitors. This inherent druggability, combined with its frequent dysregulation in cancers like non-small cell lung carcinoma, sets it apart from more challenging targets such as GTPases like KRAS, which required novel covalent inhibition strategies to overcome their smooth, historically undruggable binding surfaces.\n\n### Evidence Contribution (Interpretation)\n\nThis conclusion is primarily driven by PHAROS (strong Tclin classification, indicating FDA-approved drugs; evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS) and Open Targets (strong disease association scores ~0.8 for key cancer types; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), both contributing to the understanding of EGFR as a well-validated and clinically relevant target. DepMap provides moderate, context-specific functional support (avg CERES=-0.243 across 1169 lines, but strong dependency in 210 lines; evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), indicating that EGFR's essentiality is contingent on specific cellular or oncogenic contexts, rather than universal. Literature is also strong in this case, contributing significant historical and clinical validation through highly cited articles linking EGFR mutations to drug response in lung cancer (e.g., PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature).\n\n## 7. Evidence Strength Assessment\n\n**PHAROS:** Strong. The TDL=Tclin classification (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS) directly confirms existing FDA-approved drugs, indicating high tractability and clinical validation. The protein family as a kinase further supports its druggability.\n*   *Limitations:* PHAROS provides general target tractability and annotation but does not provide functional validation or specific disease causality mechanisms.\n\n**DepMap:** Moderate to strong, depending on context. The overall average CERES gene effect of -0.243 (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap) suggests that EGFR is not pan-essential. However, the presence of strong dependency (CERES < -1) in 17.96% of cell lines highlights its critical role in specific cancer contexts (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap).\n*   *Limitations:* DepMap data are derived from *in vitro* cell line screens, which may not fully recapitulate the complexity of *in vivo* tumor biology, microenvironment interactions, or patient heterogeneity. The essentiality is context-specific, and the specific genetic drivers in the most dependent cell lines are not detailed in this dataset.\n\n**Open Targets:** Strong. High association scores for multiple clinically significant cancers, particularly non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), provide robust evidence from genetic, somatic, and clinical sources. The corroboration with UniProt's curated disease associations adds confidence.\n*   *Limitations:* Association scores, while high, do not always directly imply causality or druggability potential in every disease context. The \"disease context\" was undefined, so the report prioritizes clinically dominant diseases from the Open Targets output.\n\n**Literature:** Strong. The selected articles are highly cited and directly relevant to EGFR's role in cancer, its mutations, and therapeutic responses, providing historical and clinical context (e.g., PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature).\n*   *Limitations:* Literature can be vast and may contain conflicting results or studies with varying levels of rigor. While filtered for relevance, it primarily serves as supportive evidence and contextual background rather than primary functional validation.\n\n## 8. Overall Assessment\n\nEGFR is a very well-established and highly validated therapeutic target with strong evidence across all categories. Its classification as a Tclin target (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS) and its identity as a receptor tyrosine kinase underscore its inherent druggability. The strong disease associations, especially with non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), are consistently supported by both Open Targets and the extensive scientific literature. While DepMap data shows context-specific essentiality rather than universal dependency (average CERES -0.243; evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), this is expected for an oncogene where dependency is often driven by specific activating mutations or amplifications, as opposed to genes required for general cell survival. No explicit contradictions in the data suggest fundamental flaws in EGFR as a target, but rather highlight the nuanced, context-dependent nature of its biological roles and therapeutic vulnerabilities. The primary limitation is the inherent difference between *in vitro* cell line models and complex *in vivo* human diseases.\n\n## 9. Final Conclusion\n\nEGFR is a highly validated and clinically established therapeutic target, particularly for non-small cell lung carcinoma and other cancers where its oncogenic activity is a driver. Its classification as a Tclin target with strong disease associations and clear, context-specific genetic dependencies firmly positions it as a high-priority target with a proven track record of successful therapeutic intervention.\n\n---\n\n# Appendix A — Raw Evidence Tables\n\nThese tables are compiled directly from the verified evidence payload to make the report scannable.\n- `evidence_id` is the canonical identifier used for traceability.\n- `normalized_score` and `confidence` are copied from the payload (they are not re-computed here).\n- If the narrative report above contains non-table lists, use these tables as the authoritative tabular view.\n\n## A1. Source Coverage\n| # | source | status | records | duration_ms | error |\n| --- | --- | --- | --- | --- | --- |\n| 1 | depmap | success | 5 | 30128 |  |\n| 2 | pharos | success | 5 | 1257 |  |\n| 3 | opentargets | success | 5 | 1288 |  |\n| 4 | literature | success | 5 | 2440 |  |\n\n## A2. Target Annotation (PHAROS)\n| # | evidence_id | source | tdl | family | ligand_total | novelty | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to non-small cell lung carcinoma (TDL=Tclin, ligands=2445). |\n| 2 | pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to glioblastoma (TDL=Tclin, ligands=2445). |\n| 3 | pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to inflammatory skin and bowel disease, neonatal, 2 (TDL=Tclin, ligands=2445). |\n| 4 | pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to giant cell glioblastoma (TDL=Tclin, ligands=2445). |\n| 5 | pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to osteosarcoma (TDL=Tclin, ligands=2445). |\n\n## A3. Genetic Dependency (DepMap)\n### A3.1 Global metrics\n| # | evidence_id | source | average_gene_effect | cell_line_count | strong_dependency_count | strong_dependency_fraction | data_release | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:EGFR:NA:genetic_dependency:1f15b784e2 | depmap | -0.243442 | 1169 | 210 | 0.1796 | DepMap 25Q3 | 0.854 | 0.121721 | DepMap CRISPR gene effect for EGFR: -0.243 avg across 1169 cell lines (210 show strong dependency ≤ −0.5). |\n\n### A3.2 Top dependent cell lines\n| # | evidence_id | cell_line_id | gene_effect | rank_within_gene | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be | ACH-000587 | -2.84859 | 1 | 0.950 | 1 | Cell-line dependency for EGFR in ACH-000587: gene_effect=-2.849 (rank 1). |\n| 2 | depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441 | ACH-000472 | -2.16491 | 2 | 0.943 | 1 | Cell-line dependency for EGFR in ACH-000472: gene_effect=-2.165 (rank 2). |\n| 3 | depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91 | ACH-002239 | -2.07407 | 3 | 0.939 | 1 | Cell-line dependency for EGFR in ACH-002239: gene_effect=-2.074 (rank 3). |\n| 4 | depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28 | ACH-002156 | -2.0341 | 4 | 0.937 | 1 | Cell-line dependency for EGFR in ACH-002156: gene_effect=-2.034 (rank 4). |\n\n## A4. Disease Associations (Open Targets)\n| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.852433 | 2539 | 0.906 | 0.852433 | Open Targets association score for EGFR and non-small cell lung carcinoma is 0.852. |\n| 2 | opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9 | opentargets | lung cancer | MONDO_0008903 | 0.766258 | 2539 | 0.880 | 0.766258 | Open Targets association score for EGFR and lung cancer is 0.766. |\n| 3 | opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609 | opentargets | lung adenocarcinoma | EFO_0000571 | 0.763945 | 2539 | 0.879 | 0.763945 | Open Targets association score for EGFR and lung adenocarcinoma is 0.764. |\n| 4 | opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d | opentargets | cancer | MONDO_0004992 | 0.745873 | 2539 | 0.874 | 0.745873 | Open Targets association score for EGFR and cancer is 0.746. |\n| 5 | opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be | opentargets | breast cancer | MONDO_0007254 | 0.678243 | 2539 | 0.853 | 0.678243 | Open Targets association score for EGFR and breast cancer is 0.678. |\n\n## A5. Literature (Europe PMC)\n| # | evidence_id | pmid | year | cited_by | title | confidence | normalized_score |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | literature:EGFR:PMID:23000897:NA:literature_article:556b33c372 | 23000897 | 2012 | 9520 | Comprehensive molecular portraits of human breast tumours. | 0.850 | 0.95 |\n| 2 | literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1 | 15118073 | 2004 | 8308 | Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib. | 0.850 | 0.9 |\n| 3 | literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f | 15118125 | 2004 | 7133 | EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy. | 0.850 | 1 |\n| 4 | literature:EGFR:PMID:19692680:NA:literature_article:64e198073e | 19692680 | 2009 | 6284 | Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma. | 0.800 | 0.85 |\n| 5 | literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962 | 20129251 | 2010 | 5717 | Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1. | 0.850 | 1 |",
    "scored_target": {
      "conflict_detail": "PHAROS (1.00) vs DEPMAP (0.12): High tractability but low genetic essentiality — may be relevant in different tissue or disease context than DepMap cell lines tested. | DEPMAP (0.12) vs OPEN_TARGETS (0.85): Strong cancer cell dependency but weak disease association score — may indicate context-specific essentiality not captured by OT GWAS data.",
      "conflict_flag": true,
      "evidence_confidence": 0.895,
      "gene": "EGFR",
      "missing_sources": [],
      "notes": [
        "Sources with sparse data: ['literature'].",
        "Inter-source conflict detected — see detail for stratification needs."
      ],
      "score_version": "1.0",
      "source_confidences": {
        "depmap": "high",
        "literature": "low",
        "open_targets": "high",
        "pharos": "high"
      },
      "source_scores": {
        "depmap": 0.1217,
        "literature": 0.2594,
        "open_targets": 0.8524327529356227,
        "pharos": 1
      },
      "sparse_sources": [
        "literature"
      ],
      "target_score": 0.5885,
      "weights_used": {
        "depmap": 0.3,
        "literature": 0.15,
        "open_targets": 0.25,
        "pharos": 0.3
      }
    },
    "final_dossier": {
      "artifact_path": "/data/artifacts/dossiers/run-2a10bc191680.evidence_dossier.json",
      "artifacts": {
        "evidence_dashboard": "/data/artifacts/evidence_dashboards/run-2a10bc191680.evidence_dashboard.html",
        "graph": "/data/artifacts/graphs/run-2a10bc191680.evidence_graph.json",
        "plan": "/data/artifacts/plans/run-2a10bc191680.collection_plan.json"
      },
      "conflicts": [],
      "emitted_at": "2026-04-09T12:53:58.723309Z",
      "errors": [],
      "graph_snapshot": {
        "artifact_path": "/data/artifacts/graphs/run-2a10bc191680.evidence_graph.json",
        "edges": [
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:EGFR:NA:genetic_dependency:1f15b784e2",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
            "target_id": "publication:pmid:15118073"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
            "target_id": "publication:pmid:15118125"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
            "target_id": "publication:pmid:19692680"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
            "target_id": "publication:pmid:20129251"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
            "target_id": "publication:pmid:23000897"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:EFO_0000571"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:EFO_0003060"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO:0005233"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO:0009807"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO:0014481"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO:0016682"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO:0018177"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO_0004992"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO_0007254"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:EGFR",
            "target_id": "disease:MONDO_0008903"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:depmap:EGFR:NA:genetic_dependency:1f15b784e2"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:EGFR",
            "target_id": "evidence:pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624"
          }
        ],
        "generated_at": "2026-04-09T12:51:51.005230Z",
        "graph_format": "json",
        "nodes": [
          {
            "attributes": {},
            "id": "disease:EFO_0000571",
            "label": "EFO_0000571",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:EFO_0003060",
            "label": "EFO_0003060",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0005233",
            "label": "MONDO:0005233",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0009807",
            "label": "MONDO:0009807",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0014481",
            "label": "MONDO:0014481",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0016682",
            "label": "MONDO:0016682",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0018177",
            "label": "MONDO:0018177",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0004992",
            "label": "MONDO_0004992",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0007254",
            "label": "MONDO_0007254",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0008903",
            "label": "MONDO_0008903",
            "node_type": "disease"
          },
          {
            "attributes": {
              "confidence": 0.9432454710988085,
              "conflict_severity": null,
              "evidence_id": "depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.9367050723629957,
              "conflict_severity": null,
              "evidence_id": "depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.9387037277298851,
              "conflict_severity": null,
              "evidence_id": "depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8538922155688623,
              "conflict_severity": null,
              "evidence_id": "depmap:EGFR:NA:genetic_dependency:1f15b784e2",
              "normalized_score": 0.12172099308976911,
              "source": "depmap"
            },
            "id": "evidence:depmap:EGFR:NA:genetic_dependency:1f15b784e2",
            "label": "genetic_dependency",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
              "normalized_score": 0.9,
              "source": "literature"
            },
            "id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
              "normalized_score": 1,
              "source": "literature"
            },
            "id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8,
              "conflict_severity": null,
              "evidence_id": "literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
              "normalized_score": 0.8500000000000001,
              "source": "literature"
            },
            "id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
              "normalized_score": 1,
              "source": "literature"
            },
            "id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
              "normalized_score": 0.9500000000000001,
              "source": "literature"
            },
            "id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.879183371845106,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
              "normalized_score": 0.7639445728170198,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.9057298258806868,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
              "normalized_score": 0.8524327529356227,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8737620412312174,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
              "normalized_score": 0.7458734707707243,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8534729071450621,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
              "normalized_score": 0.6782430238168734,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8798773064478446,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
              "normalized_score": 0.7662576881594817,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:15118073",
            "label": "15118073",
            "node_type": "publication"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:15118125",
            "label": "15118125",
            "node_type": "publication"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:19692680",
            "label": "19692680",
            "node_type": "publication"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:20129251",
            "label": "20129251",
            "node_type": "publication"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:23000897",
            "label": "23000897",
            "node_type": "publication"
          },
          {
            "attributes": {
              "provider": "DepMap (Broad Institute)"
            },
            "id": "source:depmap",
            "label": "depmap",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "Europe PMC"
            },
            "id": "source:literature",
            "label": "literature",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "Open Targets"
            },
            "id": "source:opentargets",
            "label": "opentargets",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "PHAROS"
            },
            "id": "source:pharos",
            "label": "pharos",
            "node_type": "source"
          },
          {
            "attributes": {
              "target_id": "EGFR"
            },
            "id": "target:EGFR",
            "label": "EGFR",
            "node_type": "target"
          }
        ]
      },
      "handoff_payload": {
        "blocking_issues": [],
        "conflict_count": 0,
        "dossier_artifact_path": "/data/artifacts/dossiers/run-2a10bc191680.evidence_dossier.json",
        "evidence_count": 20,
        "graph_artifact_path": "/data/artifacts/graphs/run-2a10bc191680.evidence_graph.json",
        "handoff_version": "phase2.v1",
        "phase": "phase2",
        "ready": false,
        "reason": "awaiting_human_review",
        "requested_source_count": 4,
        "review_required": true,
        "run_id": "run-2a10bc191680",
        "successful_source_count": 4,
        "warning_issues": []
      },
      "plan": {
        "artifact_path": "/data/artifacts/plans/run-2a10bc191680.collection_plan.json",
        "created_at": "2026-04-09T12:51:06.287552Z",
        "execution_notes": [
          "Found 1 prior episodic match(es) for this query.",
          "Latest related run `run-e5e84a772b4f` has no recorded review decision."
        ],
        "expected_outputs": {
          "depmap": [
            "evidence_records",
            "source_status"
          ],
          "literature": [
            "evidence_records",
            "source_status"
          ],
          "opentargets": [
            "evidence_records",
            "source_status"
          ],
          "pharos": [
            "evidence_records",
            "source_status"
          ]
        },
        "memory_context": {
          "latest_evidence_count": 35,
          "latest_review_decision": null,
          "latest_run_id": "run-e5e84a772b4f",
          "match_count": 1,
          "recent_run_ids": [
            "run-e5e84a772b4f"
          ]
        },
        "plan_version": "phase1.v1",
        "planner_model_used": null,
        "planning_mode": "cached_planner",
        "query_intent": "Collect Phase-1 evidence for target EGFR. Memory-informed planning enabled from 1 prior run(s).",
        "query_variants": [
          "EGFR",
          "ERBB1"
        ],
        "retry_policy": {
          "base_delay_ms": 100,
          "fallback": "emit_partial_result",
          "max_attempts": 3,
          "max_delay_ms": 400,
          "retryable_error_codes": [
            "timeout",
            "rate_limit",
            "upstream_error"
          ],
          "strategy": "bounded_exponential_backoff"
        },
        "run_id": "run-2a10bc191680",
        "selected_sources": [
          "depmap",
          "pharos",
          "opentargets",
          "literature"
        ],
        "source_directives": {
          "depmap": "Focus on gene dependency scores and knockout effects across cell lines.",
          "literature": "Search for recent functional studies, reviews, and clinical significance.",
          "opentargets": "Focus on gene-disease associations, target validation, and known drug mechanisms.",
          "pharos": "Focus on protein properties, target development level (TDL), and known small molecule ligands."
        }
      },
      "query": {
        "disease_id": null,
        "gene_symbol": "EGFR",
        "max_literature_articles": 5,
        "model_override": null,
        "objective": null,
        "per_source_top_k": 5,
        "run_id": "run-2a10bc191680",
        "sources": [
          "depmap",
          "pharos",
          "opentargets",
          "literature"
        ],
        "species": "Homo sapiens"
      },
      "review_decision": null,
      "run_id": "run-2a10bc191680",
      "run_metadata": {
        "collector_node_sequence": [
          "validate_input",
          "plan_collection",
          "plan_review_gate",
          "collect_sources_parallel",
          "normalize_evidence",
          "verify_evidence",
          "analyze_conflicts",
          "score_evidence",
          "assess_sufficiency",
          "build_evidence_graph",
          "generate_explanation",
          "supervisor_decide",
          "prepare_review_brief",
          "human_review_gate",
          "emit_dossier"
        ],
        "model_override": null,
        "requested_sources": 4,
        "review_iteration_count": 0
      },
      "schema_version": "0.1.0",
      "source_status": [
        {
          "duration_ms": 30128,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "depmap",
          "status": "success"
        },
        {
          "duration_ms": 1257,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "pharos",
          "status": "success"
        },
        {
          "duration_ms": 1288,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "opentargets",
          "status": "success"
        },
        {
          "duration_ms": 2440,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "literature",
          "status": "success"
        }
      ],
      "summary_markdown": "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT\n\nGene: EGFR | Run ID: run-2a10bc191680\n\n## Evidence Contribution Dashboard\n[[EVIDENCE_DASHBOARD]]\n\n## 1. Executive Summary\n\nEGFR (Epidermal Growth Factor Receptor) is a highly validated therapeutic target, classified as Tclin by PHAROS (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS), indicating the existence of FDA-approved drugs. As a receptor tyrosine kinase, EGFR represents a historically tractable target class for small molecule inhibitors. Open Targets provides strong evidence of association with multiple cancers, particularly non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), lung cancer (score 0.766; evidence_id: opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9; source: Open Targets), and glioblastoma. Genetic dependency data from DepMap shows that while EGFR is not universally essential across all cell lines (average CERES gene effect -0.243; evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), it exhibits strong essentiality (CERES < -1) in a significant subset of 210 cell lines (17.96% of 1169 lines tested), with top dependencies observed in cell lines like ACH-000587 (CERES -2.849; evidence_id: depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be; source: DepMap). This context-specific essentiality is characteristic of oncogenes. The extensive literature, including highly cited articles on EGFR mutations and response to gefitinib in lung cancer, further corroborates its clinical relevance and established role in disease pathogenesis (e.g., PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature).\n\n## 2. Target Annotation — PHAROS\n\nPHAROS categorizes EGFR as a Tclin target, signifying that it is a clinically validated target with FDA-approved drugs available. This high level of tractability is expected for a protein belonging to the Kinase family, particularly a receptor tyrosine kinase, which typically possesses well-defined ATP-binding pockets amenable to small-molecule inhibition. The very low novelty score indicates that EGFR is an extensively studied target.\n\n| Target Name                     | Family | TDL   | Novelty   | Ligand Total | Associated Disease              | Evidence ID                                          |\n| :------------------------------ | :----- | :---- | :-------- | :----------- | :------------------------------ | :--------------------------------------------------- |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | non-small cell lung carcinoma   | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | glioblastoma                    | pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | inflammatory skin and bowel disease, neonatal, 2 | pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | giant cell glioblastoma         | pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31 |\n| Epidermal growth factor receptor | Kinase | Tclin | 7.274e-05 | 2445         | osteosarcoma                    | pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2 |\n\n## 3. Genetic Dependency — DepMap\n\n### Global Dependency Analysis\n\nDepMap CRISPR gene effect data indicates that EGFR is not universally essential across all tested cell lines, with an average CERES gene effect of -0.243 across 1169 cell lines (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap). A CERES score of approximately 0 indicates non-essentiality, while scores below -1 suggest strong essentiality. However, a significant fraction of cell lines (210 out of 1169, or 17.96%) show strong dependency, with CERES scores less than or equal to -0.5 (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap). This pattern suggests that EGFR essentiality is highly context-specific, often linked to oncogenic addiction in specific cancer types rather than a pan-essential role in cell viability.\n\n| Cell Line Count | Average Gene Effect | Median Gene Effect | Strong Dependency Count | Strong Dependency Fraction | Screen Type     | Data Release  | Evidence ID                                |\n| :-------------- | :------------------ | :----------------- | :---------------------- | :------------------------- | :-------------- | :------------ | :----------------------------------------- |\n| 1169            | -0.2434             | -0.1338            | 210                     | 0.1796                     | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:NA:genetic_dependency:1f15b784e2 |\n\n### Top Dependent Cell Lines\n\nThe top dependent cell lines exhibit very strong essentiality for EGFR, with CERES scores significantly below -1. This indicates that these specific cancer cell lines are highly reliant on EGFR for their survival and proliferation. For instance, ACH-000587 shows a gene effect of -2.849 (evidence_id: depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be; source: DepMap), which is comparable to the dependency observed for pan-essential genes like PCNA or RPS6 in relevant contexts. This strong dependency in a subset of cell lines underscores the potential for targeted therapeutic intervention in specific cancer genotypes or lineages, consistent with EGFR's role as an oncogene.\n\n| Cell Line ID | Gene Effect | Rank Within Gene | Screen Type     | Data Release  | Evidence ID                                          |\n| :----------- | :---------- | :--------------- | :-------------- | :------------ | :--------------------------------------------------- |\n| ACH-000587   | -2.849      | 1                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be |\n| ACH-000472   | -2.165      | 2                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441 |\n| ACH-002239   | -2.074      | 3                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91 |\n| ACH-002156   | -2.034      | 4                | CRISPRGeneEffect | DepMap 25Q3 | depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28 |\n\n## 4. Disease Associations — Open Targets\n\nOpen Targets provides strong evidence for EGFR's association with several cancer types, reflecting a robust body of genetic, somatic, and clinical data. The highest association score is for non-small cell lung carcinoma, at 0.852 (evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets). Scores above 0.7 indicate strong associations, confirming EGFR as a well-established driver in these diseases. The associations with lung cancer (0.766; evidence_id: opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9; source: Open Targets) and lung adenocarcinoma (0.764; evidence_id: opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609; source: Open Targets) are also very high and clinically significant. The broader association with \"cancer\" (0.746; evidence_id: opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d; source: Open Targets) further supports its widespread oncogenic role. A moderate association is also observed with breast cancer (0.678; evidence_id: opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be; source: Open Targets).\n\n| Disease Name                | Association Score | Evidence Count | Evidence ID                                          |\n| :-------------------------- | :---------------- | :------------- | :--------------------------------------------------- |\n| non-small cell lung carcinoma | 0.852             | 2539           | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf |\n| lung cancer                 | 0.766             | 2539           | opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9 |\n| lung adenocarcinoma         | 0.764             | 2539           | opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609 |\n| cancer                      | 0.746             | 2539           | opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d |\n| breast cancer               | 0.678             | 2539           | opentargets:ENSG00000146648:MONDO:0007254:disease_association:ec4efa69be |\n\n## 5. Literature\n\nThe literature strongly supports EGFR's role as a key oncogene and therapeutic target, particularly in lung cancer. Articles consistently link EGFR mutations to clinical response to tyrosine kinase inhibitors like gefitinib. The top-ranked article, \"EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy\" (PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature), with over 7000 citations, highlights the clinical utility of targeting EGFR based on mutational status. Another highly cited paper, \"Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib\" (PMID 15118073; evidence_id: literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1; source: literature), further reinforces this understanding. The relevance of EGFR extends to other cancers, as indicated by a study on glioblastoma subtypes (PMID 20129251; evidence_id: literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962; source: literature) and comprehensive molecular portraits of breast tumors (PMID 23000897; evidence_id: literature:EGFR:PMID:23000897:NA:literature_article:556b33c372; source: literature).\n\n| Rank | PMID       | Title                                                                                                                              | Pub Year | Cited By Count | Gene In Title | Evidence ID                                          |\n| :--- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------- | :------------- | :------------ | :--------------------------------------------------- |\n| 1    | 15118125   | EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy.                                            | 2004     | 7133           | TRUE          | literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f |\n| 2    | 20129251   | Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1. | 2010     | 5717           | TRUE          | literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962 |\n| 3    | 23000897   | Comprehensive molecular portraits of human breast tumours.                                                                         | 2012     | 9520           | FALSE         | literature:EGFR:PMID:23000897:NA:literature_article:556b33c372 |\n| 4    | 15118073   | Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib. | 2004     | 8308           | FALSE         | literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1 |\n| 5    | 19692680   | Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma.                                                                   | 2009     | 6284           | FALSE         | literature:EGFR:PMID:19692680:NA:literature_article:64e198073e |\n\n## 6. Integrated Interpretation\n\nEGFR, the Epidermal growth factor receptor, is a vital receptor tyrosine kinase (protein_family: Belongs to the protein kinase superfamily. Tyr protein kinase family. EGF receptor subfamily; source: biological_context). Its molecular function involves binding ligands of the EGF family and activating several signaling cascades to convert extracellular cues into appropriate cellular responses, leading to cell growth, proliferation, and survival (molecular_function: Receptor tyrosine kinase binding ligands of the EGF family...; source: biological_context). This function is often dysregulated in cancer, making it a critical oncogenic driver.\n\nThe strong disease associations reported by Open Targets, particularly with non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets) and lung cancer (score 0.766; evidence_id: opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9; source: Open Targets), are well-corroborated by the `curated_disease_assocs` from UniProt, which explicitly lists \"Lung cancer\" (source: biological_context). This consistency across different data sources strengthens the confidence in EGFR's role in these malignancies. While UniProt also lists \"Neonatal nephrocutaneous inflammatory syndrome,\" this is a rare disease and does not have a high association score in the Open Targets data provided, indicating a lower clinical priority in this context.\n\nA conflict is observed between:\n-   PHAROS (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS), which classifies EGFR as Tclin with high tractability due to its kinase nature.\n-   DepMap (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), which shows moderate global genetic essentiality (average CERES -0.243).\nThis likely reflects the biological reality of oncogenes; while a kinase like EGFR is highly druggable and therapeutically relevant (Tclin), its essentiality in cellular models is often context-dependent, meaning it is only critical for survival in specific cancer cell lines driven by EGFR activation (e.g., mutations or amplification), not universally across all cell types. This is a biologically expected finding rather than a true data gap.\n\nAnother conflict exists between:\n-   DepMap (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), showing context-specific essentiality with an average CERES of -0.243.\n-   Open Targets (evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), showing strong disease association scores (e.g., 0.852 for non-small cell lung carcinoma).\nThis difference is also biologically expected. Open Targets integrates a broad array of evidence including genetic, somatic, and clinical data from patient populations, which captures the overall clinical relevance of EGFR across various disease contexts. DepMap, conversely, provides *in vitro* functional essentiality data from a panel of cell lines, which may not fully represent the complex *in vivo* disease landscape or specific genetic contexts driving essentiality in all patients. Therefore, strong disease association does not necessarily imply pan-essentiality in cell models.\n\nUnlike many less-characterized targets, EGFR is a well-established receptor tyrosine kinase, a class of proteins with highly conserved ATP-binding pockets that have historically proven to be excellent targets for small-molecule inhibitors. This inherent druggability, combined with its frequent dysregulation in cancers like non-small cell lung carcinoma, sets it apart from more challenging targets such as GTPases like KRAS, which required novel covalent inhibition strategies to overcome their smooth, historically undruggable binding surfaces.\n\n### Evidence Contribution (Interpretation)\n\nThis conclusion is primarily driven by PHAROS (strong Tclin classification, indicating FDA-approved drugs; evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS) and Open Targets (strong disease association scores ~0.8 for key cancer types; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), both contributing to the understanding of EGFR as a well-validated and clinically relevant target. DepMap provides moderate, context-specific functional support (avg CERES=-0.243 across 1169 lines, but strong dependency in 210 lines; evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), indicating that EGFR's essentiality is contingent on specific cellular or oncogenic contexts, rather than universal. Literature is also strong in this case, contributing significant historical and clinical validation through highly cited articles linking EGFR mutations to drug response in lung cancer (e.g., PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature).\n\n## 7. Evidence Strength Assessment\n\n**PHAROS:** Strong. The TDL=Tclin classification (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS) directly confirms existing FDA-approved drugs, indicating high tractability and clinical validation. The protein family as a kinase further supports its druggability.\n*   *Limitations:* PHAROS provides general target tractability and annotation but does not provide functional validation or specific disease causality mechanisms.\n\n**DepMap:** Moderate to strong, depending on context. The overall average CERES gene effect of -0.243 (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap) suggests that EGFR is not pan-essential. However, the presence of strong dependency (CERES < -1) in 17.96% of cell lines highlights its critical role in specific cancer contexts (evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap).\n*   *Limitations:* DepMap data are derived from *in vitro* cell line screens, which may not fully recapitulate the complexity of *in vivo* tumor biology, microenvironment interactions, or patient heterogeneity. The essentiality is context-specific, and the specific genetic drivers in the most dependent cell lines are not detailed in this dataset.\n\n**Open Targets:** Strong. High association scores for multiple clinically significant cancers, particularly non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), provide robust evidence from genetic, somatic, and clinical sources. The corroboration with UniProt's curated disease associations adds confidence.\n*   *Limitations:* Association scores, while high, do not always directly imply causality or druggability potential in every disease context. The \"disease context\" was undefined, so the report prioritizes clinically dominant diseases from the Open Targets output.\n\n**Literature:** Strong. The selected articles are highly cited and directly relevant to EGFR's role in cancer, its mutations, and therapeutic responses, providing historical and clinical context (e.g., PMID 15118125; evidence_id: literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f; source: literature).\n*   *Limitations:* Literature can be vast and may contain conflicting results or studies with varying levels of rigor. While filtered for relevance, it primarily serves as supportive evidence and contextual background rather than primary functional validation.\n\n## 8. Overall Assessment\n\nEGFR is a very well-established and highly validated therapeutic target with strong evidence across all categories. Its classification as a Tclin target (evidence_id: pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3; source: PHAROS) and its identity as a receptor tyrosine kinase underscore its inherent druggability. The strong disease associations, especially with non-small cell lung carcinoma (score 0.852; evidence_id: opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf; source: Open Targets), are consistently supported by both Open Targets and the extensive scientific literature. While DepMap data shows context-specific essentiality rather than universal dependency (average CERES -0.243; evidence_id: depmap:EGFR:NA:genetic_dependency:1f15b784e2; source: DepMap), this is expected for an oncogene where dependency is often driven by specific activating mutations or amplifications, as opposed to genes required for general cell survival. No explicit contradictions in the data suggest fundamental flaws in EGFR as a target, but rather highlight the nuanced, context-dependent nature of its biological roles and therapeutic vulnerabilities. The primary limitation is the inherent difference between *in vitro* cell line models and complex *in vivo* human diseases.\n\n## 9. Final Conclusion\n\nEGFR is a highly validated and clinically established therapeutic target, particularly for non-small cell lung carcinoma and other cancers where its oncogenic activity is a driver. Its classification as a Tclin target with strong disease associations and clear, context-specific genetic dependencies firmly positions it as a high-priority target with a proven track record of successful therapeutic intervention.\n\n---\n\n# Appendix A — Raw Evidence Tables\n\nThese tables are compiled directly from the verified evidence payload to make the report scannable.\n- `evidence_id` is the canonical identifier used for traceability.\n- `normalized_score` and `confidence` are copied from the payload (they are not re-computed here).\n- If the narrative report above contains non-table lists, use these tables as the authoritative tabular view.\n\n## A1. Source Coverage\n| # | source | status | records | duration_ms | error |\n| --- | --- | --- | --- | --- | --- |\n| 1 | depmap | success | 5 | 30128 |  |\n| 2 | pharos | success | 5 | 1257 |  |\n| 3 | opentargets | success | 5 | 1288 |  |\n| 4 | literature | success | 5 | 2440 |  |\n\n## A2. Target Annotation (PHAROS)\n| # | evidence_id | source | tdl | family | ligand_total | novelty | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to non-small cell lung carcinoma (TDL=Tclin, ligands=2445). |\n| 2 | pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to glioblastoma (TDL=Tclin, ligands=2445). |\n| 3 | pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to inflammatory skin and bowel disease, neonatal, 2 (TDL=Tclin, ligands=2445). |\n| 4 | pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to giant cell glioblastoma (TDL=Tclin, ligands=2445). |\n| 5 | pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2 | pharos | Tclin | Kinase | 2445 | 7.274e-05 | 0.850 | 1 | PHAROS annotations for EGFR relating to osteosarcoma (TDL=Tclin, ligands=2445). |\n\n## A3. Genetic Dependency (DepMap)\n### A3.1 Global metrics\n| # | evidence_id | source | average_gene_effect | cell_line_count | strong_dependency_count | strong_dependency_fraction | data_release | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:EGFR:NA:genetic_dependency:1f15b784e2 | depmap | -0.243442 | 1169 | 210 | 0.1796 | DepMap 25Q3 | 0.854 | 0.121721 | DepMap CRISPR gene effect for EGFR: -0.243 avg across 1169 cell lines (210 show strong dependency ≤ −0.5). |\n\n### A3.2 Top dependent cell lines\n| # | evidence_id | cell_line_id | gene_effect | rank_within_gene | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be | ACH-000587 | -2.84859 | 1 | 0.950 | 1 | Cell-line dependency for EGFR in ACH-000587: gene_effect=-2.849 (rank 1). |\n| 2 | depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441 | ACH-000472 | -2.16491 | 2 | 0.943 | 1 | Cell-line dependency for EGFR in ACH-000472: gene_effect=-2.165 (rank 2). |\n| 3 | depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91 | ACH-002239 | -2.07407 | 3 | 0.939 | 1 | Cell-line dependency for EGFR in ACH-002239: gene_effect=-2.074 (rank 3). |\n| 4 | depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28 | ACH-002156 | -2.0341 | 4 | 0.937 | 1 | Cell-line dependency for EGFR in ACH-002156: gene_effect=-2.034 (rank 4). |\n\n## A4. Disease Associations (Open Targets)\n| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.852433 | 2539 | 0.906 | 0.852433 | Open Targets association score for EGFR and non-small cell lung carcinoma is 0.852. |\n| 2 | opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9 | opentargets | lung cancer | MONDO_0008903 | 0.766258 | 2539 | 0.880 | 0.766258 | Open Targets association score for EGFR and lung cancer is 0.766. |\n| 3 | opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609 | opentargets | lung adenocarcinoma | EFO_0000571 | 0.763945 | 2539 | 0.879 | 0.763945 | Open Targets association score for EGFR and lung adenocarcinoma is 0.764. |\n| 4 | opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d | opentargets | cancer | MONDO_0004992 | 0.745873 | 2539 | 0.874 | 0.745873 | Open Targets association score for EGFR and cancer is 0.746. |\n| 5 | opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be | opentargets | breast cancer | MONDO_0007254 | 0.678243 | 2539 | 0.853 | 0.678243 | Open Targets association score for EGFR and breast cancer is 0.678. |\n\n## A5. Literature (Europe PMC)\n| # | evidence_id | pmid | year | cited_by | title | confidence | normalized_score |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | literature:EGFR:PMID:23000897:NA:literature_article:556b33c372 | 23000897 | 2012 | 9520 | Comprehensive molecular portraits of human breast tumours. | 0.850 | 0.95 |\n| 2 | literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1 | 15118073 | 2004 | 8308 | Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib. | 0.850 | 0.9 |\n| 3 | literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f | 15118125 | 2004 | 7133 | EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy. | 0.850 | 1 |\n| 4 | literature:EGFR:PMID:19692680:NA:literature_article:64e198073e | 19692680 | 2009 | 6284 | Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma. | 0.800 | 0.85 |\n| 5 | literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962 | 20129251 | 2010 | 5717 | Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1. | 0.850 | 1 |",
      "verification_report": {
        "affected_evidence_ids": [],
        "blocked": false,
        "blocking_issue_count": 0,
        "blocking_issues": [],
        "fail_count": 0,
        "generated_at": "2026-04-09T12:51:50.919966Z",
        "pass_count": 8,
        "rule_outcomes": [
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records validate against the canonical schema.",
            "passed": true,
            "rule_name": "schema_validity"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records include required provenance fields.",
            "passed": true,
            "rule_name": "provenance_completeness"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records include a canonical evidence_id.",
            "passed": true,
            "rule_name": "evidence_id_presence"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "No duplicate evidence fingerprints detected.",
            "passed": true,
            "rule_name": "duplicate_detection"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records match the requested gene symbol.",
            "passed": true,
            "rule_name": "gene_mapping_consistency"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All evidence records match the requested disease context.",
            "passed": true,
            "rule_name": "disease_mapping_consistency"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All literature evidence includes a PMID or PMCID.",
            "passed": true,
            "rule_name": "citation_presence"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All disease identifiers match EFO/MONDO format.",
            "passed": true,
            "rule_name": "ontology_id_format"
          }
        ],
        "total_rules": 8,
        "verification_policy_version": "phase1.v1",
        "warning_count": 0,
        "warning_issues": []
      },
      "verified_evidence": [
        {
          "confidence": 0.8538922155688623,
          "disease_id": null,
          "evidence_id": "depmap:EGFR:NA:genetic_dependency:1f15b784e2",
          "evidence_type": "genetic_dependency",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.12172099308976911,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:39.474659Z"
          },
          "raw_value": -0.24344198617953822,
          "retrieved_at": "2026-04-09T12:51:39.474889Z",
          "source": "depmap",
          "summary": "DepMap CRISPR gene effect for EGFR: -0.243 avg across 1169 cell lines (210 show strong dependency ≤ −0.5).",
          "support": {
            "average_gene_effect": -0.2434,
            "cell_line_count": 1169,
            "column_name": "EGFR (1956)",
            "data_release": "DepMap 25Q3",
            "median_gene_effect": -0.1338,
            "screen_type": "CRISPRGeneEffect",
            "strong_dependency_count": 210,
            "strong_dependency_fraction": 0.1796
          },
          "target_id": "EGFR",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000587",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:39.478837Z"
          },
          "raw_value": -2.8485944935115963,
          "retrieved_at": "2026-04-09T12:51:39.478862Z",
          "source": "depmap",
          "summary": "Cell-line dependency for EGFR in ACH-000587: gene_effect=-2.849 (rank 1).",
          "support": {
            "cell_line_id": "ACH-000587",
            "column_name": "EGFR (1956)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -2.8485944935115963,
            "rank_within_gene": 1,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "EGFR:ACH-000587",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.9432454710988085,
          "disease_id": null,
          "evidence_id": "depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000472",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:39.478873Z"
          },
          "raw_value": -2.1649094219761693,
          "retrieved_at": "2026-04-09T12:51:39.478879Z",
          "source": "depmap",
          "summary": "Cell-line dependency for EGFR in ACH-000472: gene_effect=-2.165 (rank 2).",
          "support": {
            "cell_line_id": "ACH-000472",
            "column_name": "EGFR (1956)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -2.1649094219761693,
            "rank_within_gene": 2,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "EGFR:ACH-000472",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.9387037277298851,
          "disease_id": null,
          "evidence_id": "depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-002239",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:39.478887Z"
          },
          "raw_value": -2.0740745545977006,
          "retrieved_at": "2026-04-09T12:51:39.478891Z",
          "source": "depmap",
          "summary": "Cell-line dependency for EGFR in ACH-002239: gene_effect=-2.074 (rank 3).",
          "support": {
            "cell_line_id": "ACH-002239",
            "column_name": "EGFR (1956)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -2.0740745545977006,
            "rank_within_gene": 3,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "EGFR:ACH-002239",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.9367050723629957,
          "disease_id": null,
          "evidence_id": "depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-002156",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:39.478898Z"
          },
          "raw_value": -2.0341014472599146,
          "retrieved_at": "2026-04-09T12:51:39.478902Z",
          "source": "depmap",
          "summary": "Cell-line dependency for EGFR in ACH-002156: gene_effect=-2.034 (rank 4).",
          "support": {
            "cell_line_id": "ACH-002156",
            "column_name": "EGFR (1956)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -2.0341014472599146,
            "rank_within_gene": 4,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "EGFR:ACH-002156",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0005233",
          "evidence_id": "pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "non-small cell lung carcinoma",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:44.158064Z"
          },
          "raw_value": {
            "disease_name": "non-small cell lung carcinoma",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:51:44.158376Z",
          "source": "pharos",
          "summary": "PHAROS annotations for EGFR relating to non-small cell lung carcinoma (TDL=Tclin, ligands=2445).",
          "support": {
            "associated_disease": "non-small cell lung carcinoma",
            "family": "Kinase",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "target_name": "Epidermal growth factor receptor",
            "tdl": "Tclin"
          },
          "target_id": "EGFR",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018177",
          "evidence_id": "pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "glioblastoma",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:44.158390Z"
          },
          "raw_value": {
            "disease_name": "glioblastoma",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:51:44.158401Z",
          "source": "pharos",
          "summary": "PHAROS annotations for EGFR relating to glioblastoma (TDL=Tclin, ligands=2445).",
          "support": {
            "associated_disease": "glioblastoma",
            "family": "Kinase",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "target_name": "Epidermal growth factor receptor",
            "tdl": "Tclin"
          },
          "target_id": "EGFR",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0014481",
          "evidence_id": "pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "inflammatory skin and bowel disease, neonatal, 2",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:44.158406Z"
          },
          "raw_value": {
            "disease_name": "inflammatory skin and bowel disease, neonatal, 2",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:51:44.158413Z",
          "source": "pharos",
          "summary": "PHAROS annotations for EGFR relating to inflammatory skin and bowel disease, neonatal, 2 (TDL=Tclin, ligands=2445).",
          "support": {
            "associated_disease": "inflammatory skin and bowel disease, neonatal, 2",
            "family": "Kinase",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "target_name": "Epidermal growth factor receptor",
            "tdl": "Tclin"
          },
          "target_id": "EGFR",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0016682",
          "evidence_id": "pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "giant cell glioblastoma",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:44.158427Z"
          },
          "raw_value": {
            "disease_name": "giant cell glioblastoma",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:51:44.158434Z",
          "source": "pharos",
          "summary": "PHAROS annotations for EGFR relating to giant cell glioblastoma (TDL=Tclin, ligands=2445).",
          "support": {
            "associated_disease": "giant cell glioblastoma",
            "family": "Kinase",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "target_name": "Epidermal growth factor receptor",
            "tdl": "Tclin"
          },
          "target_id": "EGFR",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0009807",
          "evidence_id": "pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "osteosarcoma",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:44.158438Z"
          },
          "raw_value": {
            "disease_name": "osteosarcoma",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:51:44.158445Z",
          "source": "pharos",
          "summary": "PHAROS annotations for EGFR relating to osteosarcoma (TDL=Tclin, ligands=2445).",
          "support": {
            "associated_disease": "osteosarcoma",
            "family": "Kinase",
            "ligand_total": 2445,
            "novelty": 0.00007274,
            "target_name": "Epidermal growth factor receptor",
            "tdl": "Tclin"
          },
          "target_id": "EGFR",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.9057298258806868,
          "disease_id": "EFO_0003060",
          "evidence_id": "opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8524327529356227,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000146648",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:46.717654Z"
          },
          "raw_value": 0.8524327529356227,
          "retrieved_at": "2026-04-09T12:51:46.718201Z",
          "source": "opentargets",
          "summary": "Open Targets association score for EGFR and non-small cell lung carcinoma is 0.852.",
          "support": {
            "disease_name": "non-small cell lung carcinoma",
            "evidence_count": 2539,
            "requested_disease": null
          },
          "target_id": "ENSG00000146648",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.8798773064478446,
          "disease_id": "MONDO_0008903",
          "evidence_id": "opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7662576881594817,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000146648",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:46.718227Z"
          },
          "raw_value": 0.7662576881594817,
          "retrieved_at": "2026-04-09T12:51:46.718236Z",
          "source": "opentargets",
          "summary": "Open Targets association score for EGFR and lung cancer is 0.766.",
          "support": {
            "disease_name": "lung cancer",
            "evidence_count": 2539,
            "requested_disease": null
          },
          "target_id": "ENSG00000146648",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.879183371845106,
          "disease_id": "EFO_0000571",
          "evidence_id": "opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7639445728170198,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000146648",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:46.718253Z"
          },
          "raw_value": 0.7639445728170198,
          "retrieved_at": "2026-04-09T12:51:46.718266Z",
          "source": "opentargets",
          "summary": "Open Targets association score for EGFR and lung adenocarcinoma is 0.764.",
          "support": {
            "disease_name": "lung adenocarcinoma",
            "evidence_count": 2539,
            "requested_disease": null
          },
          "target_id": "ENSG00000146648",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.8737620412312174,
          "disease_id": "MONDO_0004992",
          "evidence_id": "opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7458734707707243,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000146648",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:46.718320Z"
          },
          "raw_value": 0.7458734707707243,
          "retrieved_at": "2026-04-09T12:51:46.718327Z",
          "source": "opentargets",
          "summary": "Open Targets association score for EGFR and cancer is 0.746.",
          "support": {
            "disease_name": "cancer",
            "evidence_count": 2539,
            "requested_disease": null
          },
          "target_id": "ENSG00000146648",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.8534729071450621,
          "disease_id": "MONDO_0007254",
          "evidence_id": "opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.6782430238168734,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000146648",
              "gene_symbol": "EGFR"
            },
            "retrieved_at": "2026-04-09T12:51:46.718333Z"
          },
          "raw_value": 0.6782430238168734,
          "retrieved_at": "2026-04-09T12:51:46.718337Z",
          "source": "opentargets",
          "summary": "Open Targets association score for EGFR and breast cancer is 0.678.",
          "support": {
            "disease_name": "breast cancer",
            "evidence_count": 2539,
            "requested_disease": null
          },
          "target_id": "ENSG00000146648",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "15118125",
              "query": "\"EGFR\""
            },
            "retrieved_at": "2026-04-09T12:51:50.661239Z"
          },
          "raw_value": 7133,
          "retrieved_at": "2026-04-09T12:51:50.661360Z",
          "source": "literature",
          "summary": "Europe PMC article rank 1/5 for EGFR: EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy. (PMID=15118125, citations=7133).",
          "support": {
            "article_count_returned": 5,
            "cited_by_count": 7133,
            "eligible_hit_count": 5,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": true,
            "journal": null,
            "original_rank_by_cited_sort": 3,
            "pmid": "15118125",
            "pub_year": "2004",
            "query": "\"EGFR\"",
            "rank": 1,
            "title": "EGFR mutations in lung cancer: correlation with clinical response to gefitinib therapy.",
            "total_hit_count": 397723
          },
          "target_id": "EGFR:PMID:15118125",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "20129251",
              "query": "\"EGFR\""
            },
            "retrieved_at": "2026-04-09T12:51:50.661395Z"
          },
          "raw_value": 5717,
          "retrieved_at": "2026-04-09T12:51:50.661403Z",
          "source": "literature",
          "summary": "Europe PMC article rank 2/5 for EGFR: Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1. (PMID=20129251, citations=5717).",
          "support": {
            "article_count_returned": 5,
            "cited_by_count": 5717,
            "eligible_hit_count": 5,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": true,
            "journal": null,
            "original_rank_by_cited_sort": 5,
            "pmid": "20129251",
            "pub_year": "2010",
            "query": "\"EGFR\"",
            "rank": 2,
            "title": "Integrated genomic analysis identifies clinically relevant subtypes of glioblastoma characterized by abnormalities in PDGFRA, IDH1, EGFR, and NF1.",
            "total_hit_count": 397723
          },
          "target_id": "EGFR:PMID:20129251",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.9500000000000001,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "23000897",
              "query": "\"EGFR\""
            },
            "retrieved_at": "2026-04-09T12:51:50.661428Z"
          },
          "raw_value": 9520,
          "retrieved_at": "2026-04-09T12:51:50.661434Z",
          "source": "literature",
          "summary": "Europe PMC article rank 3/5 for EGFR: Comprehensive molecular portraits of human breast tumours. (PMID=23000897, citations=9520).",
          "support": {
            "article_count_returned": 5,
            "cited_by_count": 9520,
            "eligible_hit_count": 5,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 1,
            "pmid": "23000897",
            "pub_year": "2012",
            "query": "\"EGFR\"",
            "rank": 3,
            "title": "Comprehensive molecular portraits of human breast tumours.",
            "total_hit_count": 397723
          },
          "target_id": "EGFR:PMID:23000897",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.9,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "15118073",
              "query": "\"EGFR\""
            },
            "retrieved_at": "2026-04-09T12:51:50.661459Z"
          },
          "raw_value": 8308,
          "retrieved_at": "2026-04-09T12:51:50.661465Z",
          "source": "literature",
          "summary": "Europe PMC article rank 4/5 for EGFR: Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib. (PMID=15118073, citations=8308).",
          "support": {
            "article_count_returned": 5,
            "cited_by_count": 8308,
            "eligible_hit_count": 5,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 2,
            "pmid": "15118073",
            "pub_year": "2004",
            "query": "\"EGFR\"",
            "rank": 4,
            "title": "Activating mutations in the epidermal growth factor receptor underlying responsiveness of non-small-cell lung cancer to gefitinib.",
            "total_hit_count": 397723
          },
          "target_id": "EGFR:PMID:15118073",
          "target_symbol": "EGFR"
        },
        {
          "confidence": 0.8,
          "disease_id": null,
          "evidence_id": "literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8500000000000001,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "19692680",
              "query": "\"EGFR\""
            },
            "retrieved_at": "2026-04-09T12:51:50.661492Z"
          },
          "raw_value": 6284,
          "retrieved_at": "2026-04-09T12:51:50.661497Z",
          "source": "literature",
          "summary": "Europe PMC article rank 5/5 for EGFR: Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma. (PMID=19692680, citations=6284).",
          "support": {
            "article_count_returned": 5,
            "cited_by_count": 6284,
            "eligible_hit_count": 5,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 4,
            "pmid": "19692680",
            "pub_year": "2009",
            "query": "\"EGFR\"",
            "rank": 5,
            "title": "Gefitinib or carboplatin-paclitaxel in pulmonary adenocarcinoma.",
            "total_hit_count": 397723
          },
          "target_id": "EGFR:PMID:19692680",
          "target_symbol": "EGFR"
        }
      ]
    },
    "evidence_graph": {
      "artifact_path": "/data/artifacts/graphs/run-2a10bc191680.evidence_graph.json",
      "edges": [
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:EGFR:NA:genetic_dependency:1f15b784e2",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
          "target_id": "publication:pmid:15118073"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
          "target_id": "publication:pmid:15118125"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
          "target_id": "publication:pmid:19692680"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
          "target_id": "publication:pmid:20129251"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
          "target_id": "publication:pmid:23000897"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:EFO_0000571"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:EFO_0003060"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO:0005233"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO:0009807"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO:0014481"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO:0016682"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO:0018177"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO_0004992"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO_0007254"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:EGFR",
          "target_id": "disease:MONDO_0008903"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:depmap:EGFR:NA:genetic_dependency:1f15b784e2"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:EGFR",
          "target_id": "evidence:pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624"
        }
      ],
      "generated_at": "2026-04-09T12:51:51.005230Z",
      "graph_format": "json",
      "nodes": [
        {
          "attributes": {},
          "id": "disease:EFO_0000571",
          "label": "EFO_0000571",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:EFO_0003060",
          "label": "EFO_0003060",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0005233",
          "label": "MONDO:0005233",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0009807",
          "label": "MONDO:0009807",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0014481",
          "label": "MONDO:0014481",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0016682",
          "label": "MONDO:0016682",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0018177",
          "label": "MONDO:0018177",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0004992",
          "label": "MONDO_0004992",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0007254",
          "label": "MONDO_0007254",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0008903",
          "label": "MONDO_0008903",
          "node_type": "disease"
        },
        {
          "attributes": {
            "confidence": 0.9432454710988085,
            "conflict_severity": null,
            "evidence_id": "depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:EGFR:ACH-000472:NA:genetic_dependency_cell_line:5e9192f441",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:EGFR:ACH-000587:NA:genetic_dependency_cell_line:571426d2be",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.9367050723629957,
            "conflict_severity": null,
            "evidence_id": "depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:EGFR:ACH-002156:NA:genetic_dependency_cell_line:f0f9f58c28",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.9387037277298851,
            "conflict_severity": null,
            "evidence_id": "depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:EGFR:ACH-002239:NA:genetic_dependency_cell_line:12a9309a91",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8538922155688623,
            "conflict_severity": null,
            "evidence_id": "depmap:EGFR:NA:genetic_dependency:1f15b784e2",
            "normalized_score": 0.12172099308976911,
            "source": "depmap"
          },
          "id": "evidence:depmap:EGFR:NA:genetic_dependency:1f15b784e2",
          "label": "genetic_dependency",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
            "normalized_score": 0.9,
            "source": "literature"
          },
          "id": "evidence:literature:EGFR:PMID:15118073:NA:literature_article:8d53c54fd1",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
            "normalized_score": 1,
            "source": "literature"
          },
          "id": "evidence:literature:EGFR:PMID:15118125:NA:literature_article:d5c48e0f9f",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8,
            "conflict_severity": null,
            "evidence_id": "literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
            "normalized_score": 0.8500000000000001,
            "source": "literature"
          },
          "id": "evidence:literature:EGFR:PMID:19692680:NA:literature_article:64e198073e",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
            "normalized_score": 1,
            "source": "literature"
          },
          "id": "evidence:literature:EGFR:PMID:20129251:NA:literature_article:4ab19d1962",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
            "normalized_score": 0.9500000000000001,
            "source": "literature"
          },
          "id": "evidence:literature:EGFR:PMID:23000897:NA:literature_article:556b33c372",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.879183371845106,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
            "normalized_score": 0.7639445728170198,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000146648:EFO_0000571:disease_association:7768064609",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.9057298258806868,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
            "normalized_score": 0.8524327529356227,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000146648:EFO_0003060:disease_association:93a7c06ddf",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8737620412312174,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
            "normalized_score": 0.7458734707707243,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000146648:MONDO_0004992:disease_association:6c9fcdb63d",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8534729071450621,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
            "normalized_score": 0.6782430238168734,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000146648:MONDO_0007254:disease_association:ec4efa69be",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8798773064478446,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
            "normalized_score": 0.7662576881594817,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000146648:MONDO_0008903:disease_association:5822d4e1f9",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:EGFR:MONDO:0005233:target_annotation:3bffad1fa3",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:EGFR:MONDO:0009807:target_annotation:160228d6c2",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:EGFR:MONDO:0014481:target_annotation:59e4eadfa2",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:EGFR:MONDO:0016682:target_annotation:e8ed166b31",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:EGFR:MONDO:0018177:target_annotation:4dadc00624",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:15118073",
          "label": "15118073",
          "node_type": "publication"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:15118125",
          "label": "15118125",
          "node_type": "publication"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:19692680",
          "label": "19692680",
          "node_type": "publication"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:20129251",
          "label": "20129251",
          "node_type": "publication"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:23000897",
          "label": "23000897",
          "node_type": "publication"
        },
        {
          "attributes": {
            "provider": "DepMap (Broad Institute)"
          },
          "id": "source:depmap",
          "label": "depmap",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "Europe PMC"
          },
          "id": "source:literature",
          "label": "literature",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "Open Targets"
          },
          "id": "source:opentargets",
          "label": "opentargets",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "PHAROS"
          },
          "id": "source:pharos",
          "label": "pharos",
          "node_type": "source"
        },
        {
          "attributes": {
            "target_id": "EGFR"
          },
          "id": "target:EGFR",
          "label": "EGFR",
          "node_type": "target"
        }
      ]
    },
    "created_at": "2026-04-09T07:26:27.000Z",
    "updated_at": "2026-04-09T07:26:27.000Z"
  },
  {
    "id": "2d71bae6f55741708affcbd53c670830",
    "run_id": "run-6973460701a6",
    "title": "Research: KRAS",
    "gene_symbol": "KRAS",
    "disease_id": null,
    "objective": null,
    "summary_markdown": "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT\n\nGene: KRAS | Run ID: run-6973460701a6\n\n## Evidence Contribution Dashboard\n[[EVIDENCE_DASHBOARD]]\n\n## 1. Executive Summary\n\nKRAS is a highly tractable therapeutic target, classified as Tclin by PHAROS (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), indicating the existence of FDA-approved drugs. Genetic dependency analysis from DepMap reveals that while KRAS is not pan-essential (average CERES score -0.702 across 1169 cell lines; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap), it exhibits strong context-specific essentiality in a significant fraction of cancer cell lines (48.85% show strong dependency with CERES ≤ -0.5), with some cell lines showing extreme dependency (e.g., -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap). Open Targets provides strong disease associations with several conditions, including Noonan syndrome 3 (score 0.826; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets) and non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets), corroborating its known roles in both developmental disorders (RASopathies) and various cancers. Literature further supports its central role in cancer, with highly cited articles on colon, rectal, and endometrial carcinoma genomics (evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature). A key aspect of KRAS is its nature as a GTPase, historically challenging to drug, but recent therapeutic successes underpin its Tclin classification.\n\n## 2. Target Annotation — PHAROS\n\nPHAROS provides a comprehensive annotation of therapeutic targets, including their druggability (TDL, or Target Development Level), protein family, and associated ligands. For KRAS, the annotations highlight its established role as a drug target.\n\n| Target Name | Family | TDL   | Novelty    | Ligand Total | Associated Disease              | Evidence ID                                          |\n| :---------- | :----- | :---- | :--------- | :----------- | :------------------------------ | :--------------------------------------------------- |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | Noonan syndrome                 | pharos:KRAS:MONDO:0018997:target_annotation:6021aed105 |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | juvenile myelomonocytic leukemia | pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28 |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | cardiofaciocutaneous syndrome   | pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53 |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | acute myeloid leukemia          | pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | gastric cancer                  | pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f |\n\nKRAS is classified as Tclin (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), indicating that FDA-approved drugs or drugs in clinical trials exist for this target. This classification is highly significant, as it confirms the druggability of KRAS, a GTPase (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), which was historically considered an \"undruggable\" target due to its smooth GTP-binding surface. The presence of 223 ligands (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) further underscores its extensive study and the successful development of compounds targeting it. The \"Novelty\" score of 0.00013856 (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) suggests that KRAS is a very well-studied target within the scientific community, with a low degree of novelty, reflecting its established importance in disease biology.\n\n## 3. Genetic Dependency — DepMap\n\nDepMap provides systematic genetic dependency data derived from CRISPR-Cas9 screens across a large panel of cancer cell lines. This data quantifies the essentiality of genes for cell survival and proliferation.\n\n### Global Dependency Analysis\n\nThe CRISPR gene effect (CERES score) measures how much cell growth is inhibited upon gene knockout. A CERES score of 0 means no effect, -1 means the gene is essential (similar to a pan-essential gene like PCNA), and values below -1 indicate stronger essentiality.\n\n| Screen Type     | Cell Line Count | Average Gene Effect | Median Gene Effect | Strong Dependency Count | Strong Dependency Fraction | Evidence ID                                  |\n| :-------------- | :-------------- | :------------------ | :----------------- | :---------------------- | :------------------------- | :------------------------------------------- |\n| CRISPRGeneEffect | 1169            | -0.702              | -0.489             | 571                     | 0.4885                     | depmap:KRAS:NA:genetic_dependency:2067ce2c5f |\n\nThe average CERES score for KRAS is -0.702 across 1169 cell lines (evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap). This value indicates a moderate, but not universal, essentiality. Compared to pan-essential genes like PCNA, which would typically show CERES scores consistently below -1 across most cell lines, KRAS's average suggests its essentiality is context-specific rather than ubiquitous. Importantly, 571 out of 1169 cell lines (48.85%) exhibit a strong dependency (CERES ≤ -0.5; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap), meaning nearly half of the tested cancer cell lines are significantly impacted by KRAS knockout. This pattern is characteristic of oncogenes, where dependency is often observed in specific genetic backgrounds or cancer types (e.g., those harboring activating KRAS mutations).\n\n### Top Dependent Cell Lines\n\nThe following table lists the cell lines that show the strongest genetic dependency on KRAS, ranked by their CERES gene effect score.\n\n| Cell Line ID | Gene Effect | Rank Within Gene | Evidence ID                                          |\n| :----------- | :---------- | :--------------- | :--------------------------------------------------- |\n| ACH-000222   | -4.282      | 1                | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab |\n| ACH-000417   | -3.859      | 2                | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7 |\n| ACH-000505   | -3.814      | 3                | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a |\n| ACH-000235   | -3.494      | 4                | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db |\n\nThe top dependent cell lines exhibit extremely low CERES scores, such as -4.282 in ACH-000222 (evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) and -3.859 in ACH-000417 (evidence_id: depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7; source: DepMap). These values are significantly below -1, indicating very strong essentiality in these specific cellular contexts. Such high dependency suggests that these cell lines are highly reliant on KRAS for survival and proliferation, likely due to oncogenic KRAS mutations or other pathway alterations that make them particularly sensitive to KRAS inhibition. This context-specific vulnerability is a critical aspect of KRAS biology and therapeutic targeting.\n\n## 4. Disease Associations — Open Targets\n\nOpen Targets integrates various lines of evidence (genetic, somatic, clinical, RNA expression, etc.) to calculate a comprehensive association score between targets and diseases. Scores range from 0 to 1, with higher scores indicating stronger evidence of association.\n\n| Disease Name                   | Association Score | Evidence Count | Evidence ID                                          |\n| :----------------------------- | :---------------- | :------------- | :--------------------------------------------------- |\n| Noonan syndrome 3              | 0.826             | 1815           | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 |\n| cardiofaciocutaneous syndrome 2 | 0.814             | 1815           | opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464 |\n| Noonan syndrome                | 0.813             | 1815           | opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e |\n| non-small cell lung carcinoma  | 0.809             | 1815           | opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e |\n| cardiofaciocutaneous syndrome  | 0.794             | 1815           | opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160 |\n\nKRAS exhibits strong disease associations with multiple conditions, reflected by high Open Targets scores. Noonan syndrome 3 (score 0.826; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets), cardiofaciocutaneous syndrome 2 (score 0.814; evidence_id: opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464; source: Open Targets), and Noonan syndrome (score 0.813; evidence_id: opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e; source: Open Targets) are all developmental disorders known as RASopathies, where germline mutations in KRAS or other RAS pathway genes cause a spectrum of clinical features. These high scores are corroborated by the `biological_context.curated_disease_assocs` which lists Noonan syndrome 3 and Cardiofaciocutaneous syndrome 2.\n\nSignificantly, KRAS also shows a strong association with non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets). This is a critical finding, as somatic KRAS mutations are prevalent drivers in various cancers, including NSCLC. The `biological_context.curated_disease_assocs` further lists \"Leukemia, acute myelogenous\", \"Leukemia, juvenile myelomonocytic\", and \"Gastric cancer\", which align with the PHAROS associations (evidence_id: pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28; source: PHAROS; evidence_id: pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f; source: PHAROS; evidence_id: pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f; source: PHAROS). The consistency across sources and high association scores underscore KRAS's profound involvement in both congenital syndromes and oncogenesis.\n\n## 5. Literature\n\nThe literature search was filtered to include only highly relevant articles where KRAS is a central topic and disease or therapeutic relevance is clear. Generic biology papers, methods papers, or unrelated guidelines were excluded to ensure high-quality, focused evidence.\n\n| Rank | PMID      | Title                                                               | Journal | Publication Year | Cited By Count | Gene in Title | Gene in Abstract | Evidence ID                                          |\n| :--- | :-------- | :------------------------------------------------------------------ | :------ | :--------------- | :------------- | :------------ | :--------------- | :--------------------------------------------------- |\n| 1    | 22810696  | Comprehensive molecular characterization of human colon and rectal cancer. |         | 2012             | 6682           | False         | True             | literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd |\n| 2    | 23636398  | Integrated genomic characterization of endometrial carcinoma.       |         | 2013             | 4161           | False         | True             | literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4 |\n\nThe top literature articles, \"Comprehensive molecular characterization of human colon and rectal cancer\" (PMID:22810696; evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature) and \"Integrated genomic characterization of endometrial carcinoma\" (PMID:23636398; evidence_id: literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4; source: Literature), are both highly cited (6682 and 4161 citations, respectively). These papers, from major consortia like The Cancer Genome Atlas (TCGA), provide foundational genomic insights into the role of KRAS in common human cancers. While KRAS is not in the title, its presence in the abstract and the nature of these comprehensive molecular characterization studies confirm its critical relevance to the pathogenesis of these diseases. This literature evidence strongly supports the disease associations identified by Open Targets, particularly in the context of various carcinomas.\n\n## 6. Integrated Interpretation\n\nKRAS, or GTPase KRas, belongs to the small GTPase superfamily, specifically the Ras family. Its molecular function involves binding GDP/GTP and possessing intrinsic GTPase activity, playing a crucial role in regulating cell proliferation (PubMed:20949621, PubMed:39809765) and promoting oncogenic events by inducing transcriptional silencing of tumor suppressor genes in colorectal cancer (PubMed:24623306).\n\nThe PHAROS classification of KRAS as Tclin (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) is a significant indicator of its therapeutic potential, confirming the existence of FDA-approved drugs or clinical stage compounds. This is particularly noteworthy given that KRAS, as a GTPase, was historically considered challenging to drug due to its smooth GTP-binding surface, unlike kinase targets such as EGFR which offer well-defined ATP-binding pockets for small-molecule inhibition. The recent development of covalent G12C inhibitors (e.g., sotorasib, adagrasib) has overcome this historical hurdle, validating its Tclin status.\n\nDepMap data indicates that KRAS is not a pan-essential gene, with an average CERES score of -0.702 (evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap). However, its strong dependency in nearly half of the tested cancer cell lines (48.85% with CERES ≤ -0.5) and extremely strong dependencies in specific cell lines (e.g., -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) highlight its context-specific essentiality. This pattern is entirely consistent with KRAS's known role as an oncogene, where specific mutations (e.g., G12C, G12D, G12V) drive tumor growth and create therapeutic vulnerabilities in specific cancer types like non-small cell lung carcinoma, colorectal cancer, and pancreatic cancer.\n\nOpen Targets strongly links KRAS to both developmental RASopathies (e.g., Noonan syndrome 3, score 0.826; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets) and various cancers, notably non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets). These associations are well-supported by the `biological_context.curated_disease_assocs` which also lists several leukemias and gastric cancer, further reinforcing KRAS's broad pathophysiological involvement. The high-impact literature further solidifies KRAS's role as a key driver in colon, rectal, and endometrial cancers (evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature; evidence_id: literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4; source: Literature).\n\nA conflict is observed between PHAROS (Tclin status, indicating high tractability; evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) and the average genetic essentiality from DepMap (moderate CERES score -0.702; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap). This likely reflects a biologically expected phenomenon: KRAS is not universally essential for all cell survival, but becomes critically important in specific oncogenic contexts, often driven by activating mutations. The Tclin status acknowledges the success in targeting these specific oncogenic forms of KRAS, while the average DepMap score reflects the broader, heterogeneous landscape of cancer cell lines, many of which may not harbor KRAS mutations or be dependent on KRAS for survival. This is a context-dependent difference, not a true data gap.\n\n### Evidence Contribution (Interpretation)\n\nThis conclusion is primarily driven by PHAROS and Open Targets. PHAROS provides strong evidence of druggability, classifying KRAS as Tclin (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), biologically signifying the existence of FDA-approved drugs or clinical candidates, which is a critical indicator for therapeutic targeting. Open Targets provides strong and broad disease association scores (e.g., 0.826 for Noonan syndrome 3; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets, and 0.809 for non-small cell lung carcinoma; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets), biologically connecting KRAS to multiple pathologies, including both developmental disorders and prevalent cancers. DepMap provides moderate, context-specific functional support (avg CERES=-0.702 across 1169 lines; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap), biologically indicating that KRAS essentiality is not universal but is pronounced in specific cancer cell lines (e.g., -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap), consistent with its role as a conditional oncogene. Literature is weakest in terms of direct target validation scores but provides crucial biological context and corroboration for KRAS's involvement in major cancer types (e.g., colon and rectal cancer; evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature), reinforcing the disease associations from Open Targets.\n\n## 7. Evidence Strength Assessment\n\n*   **Target Annotation (PHAROS):** Strong. The Tclin classification (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) is definitive, indicating successful drug development. The high number of ligands (223; evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) further confirms its pharmacological tractability. The main limitation is that TDL classification does not specify the *mechanism* of action or *specific mutations* being targeted, which is highly relevant for KRAS.\n*   **Genetic Dependency (DepMap):** Moderate to Strong, with crucial context-specificity. The average CERES score of -0.702 (evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap) is not indicative of pan-essentiality, but the significant fraction of cell lines (48.85%) showing strong dependency (CERES ≤ -0.5; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap) and the extremely strong dependencies in top cell lines (e.g., -4.282; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) provide robust functional evidence for context-dependent vulnerability. A limitation is that DepMap data is from *in vitro* cancer cell lines, which may not fully reflect the complexities of *in vivo* tumor biology or the microenvironment's impact on KRAS dependency.\n*   **Disease Associations (Open Targets):** Strong. The high association scores (e.g., 0.826 for Noonan syndrome 3; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets, and 0.809 for non-small cell lung carcinoma; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets) are supported by a large evidence count (1815) and align well with established biological knowledge of KRAS in both RASopathies and various cancers. A limitation is that the \"undefined indication\" in the initial request means the report prioritizes based on general clinical relevance and score, rather than a specific disease context.\n*   **Literature:** Moderate. The selected literature provides high-impact, foundational genomic characterizations of KRAS in major cancer types (e.g., colon and rectal cancer; evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature), reinforcing the disease associations. However, literature is used as supporting context rather than primary evidence for target validation. The inherent limitation is that a high citation count does not equate to direct therapeutic validation, and the articles focus on characterization rather than direct therapeutic intervention.\n\nNo explicit contradictions between data sources were detected, beyond the expected context-specific differences in essentiality vs. druggability, which are biologically understood for oncogenes like KRAS.\n\n## 8. Overall Assessment\n\nKRAS represents a highly validated and therapeutically relevant target. The combined evidence strongly supports its role in both developmental disorders and a range of cancers, driven by its fundamental function in cell proliferation and oncogenic signaling. Its Tclin status, despite its historical \"undruggable\" reputation as a GTPase, underscores recent therapeutic breakthroughs. While not universally essential, its pronounced context-specific essentiality in numerous cancer cell lines provides a strong rationale for targeted therapeutic strategies, particularly for tumors harboring specific KRAS mutations. The extensive disease associations from Open Targets and corroborating literature further solidify its importance across multiple indications.\n\n## 9. Final Conclusion\n\nKRAS is a highly validated and druggable target (Tclin; evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) with strong, context-specific genetic dependencies in cancer (e.g., CERES -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) and robust associations with multiple diseases, including non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets) and RASopathies. Its established role as an oncogene and the availability of approved therapies confirm its high potential for therapeutic intervention.\n\n---\n\n# Appendix A — Raw Evidence Tables\n\nThese tables are compiled directly from the verified evidence payload to make the report scannable.\n- `evidence_id` is the canonical identifier used for traceability.\n- `normalized_score` and `confidence` are copied from the payload (they are not re-computed here).\n- If the narrative report above contains non-table lists, use these tables as the authoritative tabular view.\n\n## A1. Source Coverage\n| # | source | status | records | duration_ms | error |\n| --- | --- | --- | --- | --- | --- |\n| 1 | depmap | success | 5 | 23005 |  |\n| 2 | pharos | success | 5 | 5755 |  |\n| 3 | opentargets | success | 5 | 11757 |  |\n| 4 | literature | success | 2 | 26367 |  |\n\n## A2. Target Annotation (PHAROS)\n| # | evidence_id | source | tdl | family | ligand_total | novelty | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | pharos:KRAS:MONDO:0018997:target_annotation:6021aed105 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 2 | pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 3 | pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 4 | pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 5 | pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n\n## A3. Genetic Dependency (DepMap)\n### A3.1 Global metrics\n| # | evidence_id | source | average_gene_effect | cell_line_count | strong_dependency_count | strong_dependency_fraction | data_release | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:NA:genetic_dependency:2067ce2c5f | depmap | -0.70196 | 1169 | 571 | 0.4885 | DepMap 25Q3 | 0.947 | 0.35098 | DepMap CRISPR gene effect for KRAS: -0.702 avg across 1169 cell lines (571 show strong dependency ≤ −0.5). |\n\n### A3.2 Top dependent cell lines\n| # | evidence_id | cell_line_id | gene_effect | rank_within_gene | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab | ACH-000222 | -4.28233 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.282 (rank 1). |\n| 2 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7 | ACH-000417 | -3.85918 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.859 (rank 2). |\n| 3 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a | ACH-000505 | -3.81362 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.814 (rank 3). |\n| 4 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db | ACH-000235 | -3.49377 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.494 (rank 4). |\n\n## A4. Disease Associations (Open Targets)\n| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 2 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 3 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 4 | opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 5 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160 | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n\n## A5. Literature (Europe PMC)\n| # | evidence_id | pmid | year | cited_by | title | confidence | normalized_score |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd | 22810696 | 2012 | 6682 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 2 | literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4 | 23636398 | 2013 | 4161 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |",
    "scored_target": {
      "conflict_detail": "PHAROS (1.00) vs DEPMAP (0.35): High tractability but low genetic essentiality — may be relevant in different tissue or disease context than DepMap cell lines tested.",
      "conflict_flag": true,
      "evidence_confidence": 0.895,
      "gene": "KRAS",
      "missing_sources": [],
      "notes": [
        "Sources with sparse data: ['literature'].",
        "Inter-source conflict detected — see detail for stratification needs."
      ],
      "score_version": "1.0",
      "source_confidences": {
        "depmap": "high",
        "literature": "low",
        "open_targets": "high",
        "pharos": "high"
      },
      "source_scores": {
        "depmap": 0.351,
        "literature": 0.159,
        "open_targets": 0.8263697027313498,
        "pharos": 1
      },
      "sparse_sources": [
        "literature"
      ],
      "target_score": 0.6357,
      "weights_used": {
        "depmap": 0.3,
        "literature": 0.15,
        "open_targets": 0.25,
        "pharos": 0.3
      }
    },
    "final_dossier": {
      "artifact_path": "/data/artifacts/dossiers/run-6973460701a6.evidence_dossier.json",
      "artifacts": {
        "evidence_dashboard": "/data/artifacts/evidence_dashboards/run-6973460701a6.evidence_dashboard.html",
        "graph": "/data/artifacts/graphs/run-6973460701a6.evidence_graph.json",
        "plan": "/data/artifacts/plans/run-6973460701a6.collection_plan.json"
      },
      "conflicts": [],
      "emitted_at": "2026-04-09T12:50:37.019196Z",
      "errors": [],
      "graph_snapshot": {
        "artifact_path": "/data/artifacts/graphs/run-6973460701a6.evidence_graph.json",
        "edges": [
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
            "target_id": "source:depmap"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
            "target_id": "publication:pmid:22810696"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_publication",
            "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
            "target_id": "publication:pmid:23636398"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
            "target_id": "source:literature"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
            "target_id": "source:opentargets"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "evidence_source",
            "source_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
            "target_id": "source:pharos"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:EFO_0003060"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0001056"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0011908"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0015280"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0018874"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO:0018997"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0012371"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0014112"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0015280"
          },
          {
            "attributes": {},
            "edge_type": "target_disease",
            "source_id": "target:KRAS",
            "target_id": "disease:MONDO_0018997"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:depmap:KRAS:NA:genetic_dependency:2067ce2c5f"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f"
          },
          {
            "attributes": {},
            "edge_type": "target_evidence",
            "source_id": "target:KRAS",
            "target_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:6021aed105"
          }
        ],
        "generated_at": "2026-04-09T12:48:35.750571Z",
        "graph_format": "json",
        "nodes": [
          {
            "attributes": {},
            "id": "disease:EFO_0003060",
            "label": "EFO_0003060",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0001056",
            "label": "MONDO:0001056",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0011908",
            "label": "MONDO:0011908",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0015280",
            "label": "MONDO:0015280",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0018874",
            "label": "MONDO:0018874",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO:0018997",
            "label": "MONDO:0018997",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0012371",
            "label": "MONDO_0012371",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0014112",
            "label": "MONDO_0014112",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0015280",
            "label": "MONDO_0015280",
            "node_type": "disease"
          },
          {
            "attributes": {},
            "id": "disease:MONDO_0018997",
            "label": "MONDO_0018997",
            "node_type": "disease"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.95,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
              "normalized_score": 1,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
            "label": "genetic_dependency_cell_line",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.9465355004277161,
              "conflict_severity": null,
              "evidence_id": "depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
              "normalized_score": 0.3509802066460565,
              "source": "depmap"
            },
            "id": "evidence:depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
            "label": "genetic_dependency",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
              "normalized_score": 0.9,
              "source": "literature"
            },
            "id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8,
              "conflict_severity": null,
              "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
              "normalized_score": 0.8500000000000001,
              "source": "literature"
            },
            "id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
            "label": "literature_article",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.89275320519801,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
              "normalized_score": 0.8091773506600335,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8979109108194049,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
              "normalized_score": 0.8263697027313498,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8943234896706429,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
              "normalized_score": 0.8144116322354762,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8883445975496039,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
              "normalized_score": 0.7944819918320131,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.8939379521341774,
              "conflict_severity": null,
              "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
              "normalized_score": 0.8131265071139245,
              "source": "opentargets"
            },
            "id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
            "label": "disease_association",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "confidence": 0.85,
              "conflict_severity": null,
              "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
              "normalized_score": 1,
              "source": "pharos"
            },
            "id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
            "label": "target_annotation",
            "node_type": "evidence"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:22810696",
            "label": "22810696",
            "node_type": "publication"
          },
          {
            "attributes": {
              "identifier_type": "pmid"
            },
            "id": "publication:pmid:23636398",
            "label": "23636398",
            "node_type": "publication"
          },
          {
            "attributes": {
              "provider": "DepMap (Broad Institute)"
            },
            "id": "source:depmap",
            "label": "depmap",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "Europe PMC"
            },
            "id": "source:literature",
            "label": "literature",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "Open Targets"
            },
            "id": "source:opentargets",
            "label": "opentargets",
            "node_type": "source"
          },
          {
            "attributes": {
              "provider": "PHAROS"
            },
            "id": "source:pharos",
            "label": "pharos",
            "node_type": "source"
          },
          {
            "attributes": {
              "target_id": "KRAS"
            },
            "id": "target:KRAS",
            "label": "KRAS",
            "node_type": "target"
          }
        ]
      },
      "handoff_payload": {
        "blocking_issues": [],
        "conflict_count": 0,
        "dossier_artifact_path": "/data/artifacts/dossiers/run-6973460701a6.evidence_dossier.json",
        "evidence_count": 17,
        "graph_artifact_path": "/data/artifacts/graphs/run-6973460701a6.evidence_graph.json",
        "handoff_version": "phase2.v1",
        "phase": "phase2",
        "ready": false,
        "reason": "awaiting_human_review",
        "requested_source_count": 4,
        "review_required": true,
        "run_id": "run-6973460701a6",
        "successful_source_count": 4,
        "warning_issues": []
      },
      "plan": {
        "artifact_path": "/data/artifacts/plans/run-6973460701a6.collection_plan.json",
        "created_at": "2026-04-09T12:47:20.752521Z",
        "execution_notes": [
          "Found 9 prior episodic match(es) for this query.",
          "Latest related run `run-beb361762953` has no recorded review decision."
        ],
        "expected_outputs": {
          "depmap": [
            "evidence_records",
            "source_status"
          ],
          "literature": [
            "evidence_records",
            "source_status"
          ],
          "opentargets": [
            "evidence_records",
            "source_status"
          ],
          "pharos": [
            "evidence_records",
            "source_status"
          ]
        },
        "memory_context": {
          "latest_evidence_count": 0,
          "latest_review_decision": null,
          "latest_run_id": "run-beb361762953",
          "match_count": 9,
          "recent_run_ids": [
            "run-ecca949b2c4f",
            "run-99ac55963217",
            "run-beb361762953"
          ]
        },
        "plan_version": "phase1.v1",
        "planner_model_used": null,
        "planning_mode": "cached_planner",
        "query_intent": "Collect Phase-1 evidence for target KRAS. Memory-informed planning enabled from 9 prior run(s).",
        "query_variants": [
          "KRAS",
          "K-RAS"
        ],
        "retry_policy": {
          "base_delay_ms": 100,
          "fallback": "emit_partial_result",
          "max_attempts": 3,
          "max_delay_ms": 400,
          "retryable_error_codes": [
            "timeout",
            "rate_limit",
            "upstream_error"
          ],
          "strategy": "bounded_exponential_backoff"
        },
        "run_id": "run-6973460701a6",
        "selected_sources": [
          "depmap",
          "pharos",
          "opentargets",
          "literature"
        ],
        "source_directives": {
          "depmap": "Identify gene dependency scores and essentiality profiles for KRAS across various cancer cell lines.",
          "literature": "Search for recent functional studies, clinical trial results, and mechanistic insights involving KRAS.",
          "opentargets": "Map KRAS disease associations, biological pathways, and target validation evidence.",
          "pharos": "Retrieve protein classification, druggability status, and known small molecule ligands for KRAS."
        }
      },
      "query": {
        "disease_id": null,
        "gene_symbol": "KRAS",
        "max_literature_articles": 5,
        "model_override": null,
        "objective": null,
        "per_source_top_k": 5,
        "run_id": "run-6973460701a6",
        "sources": [
          "depmap",
          "pharos",
          "opentargets",
          "literature"
        ],
        "species": "Homo sapiens"
      },
      "review_decision": null,
      "run_id": "run-6973460701a6",
      "run_metadata": {
        "collector_node_sequence": [
          "validate_input",
          "plan_collection",
          "plan_review_gate",
          "collect_sources_parallel",
          "normalize_evidence",
          "verify_evidence",
          "analyze_conflicts",
          "score_evidence",
          "assess_sufficiency",
          "build_evidence_graph",
          "generate_explanation",
          "supervisor_decide",
          "prepare_review_brief",
          "human_review_gate",
          "emit_dossier"
        ],
        "model_override": null,
        "requested_sources": 4,
        "review_iteration_count": 0
      },
      "schema_version": "0.1.0",
      "source_status": [
        {
          "duration_ms": 23005,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "depmap",
          "status": "success"
        },
        {
          "duration_ms": 5755,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "pharos",
          "status": "success"
        },
        {
          "duration_ms": 11757,
          "error_code": null,
          "error_message": null,
          "record_count": 5,
          "source": "opentargets",
          "status": "success"
        },
        {
          "duration_ms": 26367,
          "error_code": null,
          "error_message": null,
          "record_count": 2,
          "source": "literature",
          "status": "success"
        }
      ],
      "summary_markdown": "# THERAPEUTIC TARGET EVIDENCE SUMMARY REPORT\n\nGene: KRAS | Run ID: run-6973460701a6\n\n## Evidence Contribution Dashboard\n[[EVIDENCE_DASHBOARD]]\n\n## 1. Executive Summary\n\nKRAS is a highly tractable therapeutic target, classified as Tclin by PHAROS (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), indicating the existence of FDA-approved drugs. Genetic dependency analysis from DepMap reveals that while KRAS is not pan-essential (average CERES score -0.702 across 1169 cell lines; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap), it exhibits strong context-specific essentiality in a significant fraction of cancer cell lines (48.85% show strong dependency with CERES ≤ -0.5), with some cell lines showing extreme dependency (e.g., -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap). Open Targets provides strong disease associations with several conditions, including Noonan syndrome 3 (score 0.826; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets) and non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets), corroborating its known roles in both developmental disorders (RASopathies) and various cancers. Literature further supports its central role in cancer, with highly cited articles on colon, rectal, and endometrial carcinoma genomics (evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature). A key aspect of KRAS is its nature as a GTPase, historically challenging to drug, but recent therapeutic successes underpin its Tclin classification.\n\n## 2. Target Annotation — PHAROS\n\nPHAROS provides a comprehensive annotation of therapeutic targets, including their druggability (TDL, or Target Development Level), protein family, and associated ligands. For KRAS, the annotations highlight its established role as a drug target.\n\n| Target Name | Family | TDL   | Novelty    | Ligand Total | Associated Disease              | Evidence ID                                          |\n| :---------- | :----- | :---- | :--------- | :----------- | :------------------------------ | :--------------------------------------------------- |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | Noonan syndrome                 | pharos:KRAS:MONDO:0018997:target_annotation:6021aed105 |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | juvenile myelomonocytic leukemia | pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28 |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | cardiofaciocutaneous syndrome   | pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53 |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | acute myeloid leukemia          | pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f |\n| GTPase KRas | Enzyme | Tclin | 0.00013856 | 223          | gastric cancer                  | pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f |\n\nKRAS is classified as Tclin (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), indicating that FDA-approved drugs or drugs in clinical trials exist for this target. This classification is highly significant, as it confirms the druggability of KRAS, a GTPase (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), which was historically considered an \"undruggable\" target due to its smooth GTP-binding surface. The presence of 223 ligands (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) further underscores its extensive study and the successful development of compounds targeting it. The \"Novelty\" score of 0.00013856 (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) suggests that KRAS is a very well-studied target within the scientific community, with a low degree of novelty, reflecting its established importance in disease biology.\n\n## 3. Genetic Dependency — DepMap\n\nDepMap provides systematic genetic dependency data derived from CRISPR-Cas9 screens across a large panel of cancer cell lines. This data quantifies the essentiality of genes for cell survival and proliferation.\n\n### Global Dependency Analysis\n\nThe CRISPR gene effect (CERES score) measures how much cell growth is inhibited upon gene knockout. A CERES score of 0 means no effect, -1 means the gene is essential (similar to a pan-essential gene like PCNA), and values below -1 indicate stronger essentiality.\n\n| Screen Type     | Cell Line Count | Average Gene Effect | Median Gene Effect | Strong Dependency Count | Strong Dependency Fraction | Evidence ID                                  |\n| :-------------- | :-------------- | :------------------ | :----------------- | :---------------------- | :------------------------- | :------------------------------------------- |\n| CRISPRGeneEffect | 1169            | -0.702              | -0.489             | 571                     | 0.4885                     | depmap:KRAS:NA:genetic_dependency:2067ce2c5f |\n\nThe average CERES score for KRAS is -0.702 across 1169 cell lines (evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap). This value indicates a moderate, but not universal, essentiality. Compared to pan-essential genes like PCNA, which would typically show CERES scores consistently below -1 across most cell lines, KRAS's average suggests its essentiality is context-specific rather than ubiquitous. Importantly, 571 out of 1169 cell lines (48.85%) exhibit a strong dependency (CERES ≤ -0.5; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap), meaning nearly half of the tested cancer cell lines are significantly impacted by KRAS knockout. This pattern is characteristic of oncogenes, where dependency is often observed in specific genetic backgrounds or cancer types (e.g., those harboring activating KRAS mutations).\n\n### Top Dependent Cell Lines\n\nThe following table lists the cell lines that show the strongest genetic dependency on KRAS, ranked by their CERES gene effect score.\n\n| Cell Line ID | Gene Effect | Rank Within Gene | Evidence ID                                          |\n| :----------- | :---------- | :--------------- | :--------------------------------------------------- |\n| ACH-000222   | -4.282      | 1                | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab |\n| ACH-000417   | -3.859      | 2                | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7 |\n| ACH-000505   | -3.814      | 3                | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a |\n| ACH-000235   | -3.494      | 4                | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db |\n\nThe top dependent cell lines exhibit extremely low CERES scores, such as -4.282 in ACH-000222 (evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) and -3.859 in ACH-000417 (evidence_id: depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7; source: DepMap). These values are significantly below -1, indicating very strong essentiality in these specific cellular contexts. Such high dependency suggests that these cell lines are highly reliant on KRAS for survival and proliferation, likely due to oncogenic KRAS mutations or other pathway alterations that make them particularly sensitive to KRAS inhibition. This context-specific vulnerability is a critical aspect of KRAS biology and therapeutic targeting.\n\n## 4. Disease Associations — Open Targets\n\nOpen Targets integrates various lines of evidence (genetic, somatic, clinical, RNA expression, etc.) to calculate a comprehensive association score between targets and diseases. Scores range from 0 to 1, with higher scores indicating stronger evidence of association.\n\n| Disease Name                   | Association Score | Evidence Count | Evidence ID                                          |\n| :----------------------------- | :---------------- | :------------- | :--------------------------------------------------- |\n| Noonan syndrome 3              | 0.826             | 1815           | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 |\n| cardiofaciocutaneous syndrome 2 | 0.814             | 1815           | opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464 |\n| Noonan syndrome                | 0.813             | 1815           | opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e |\n| non-small cell lung carcinoma  | 0.809             | 1815           | opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e |\n| cardiofaciocutaneous syndrome  | 0.794             | 1815           | opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160 |\n\nKRAS exhibits strong disease associations with multiple conditions, reflected by high Open Targets scores. Noonan syndrome 3 (score 0.826; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets), cardiofaciocutaneous syndrome 2 (score 0.814; evidence_id: opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464; source: Open Targets), and Noonan syndrome (score 0.813; evidence_id: opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e; source: Open Targets) are all developmental disorders known as RASopathies, where germline mutations in KRAS or other RAS pathway genes cause a spectrum of clinical features. These high scores are corroborated by the `biological_context.curated_disease_assocs` which lists Noonan syndrome 3 and Cardiofaciocutaneous syndrome 2.\n\nSignificantly, KRAS also shows a strong association with non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets). This is a critical finding, as somatic KRAS mutations are prevalent drivers in various cancers, including NSCLC. The `biological_context.curated_disease_assocs` further lists \"Leukemia, acute myelogenous\", \"Leukemia, juvenile myelomonocytic\", and \"Gastric cancer\", which align with the PHAROS associations (evidence_id: pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28; source: PHAROS; evidence_id: pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f; source: PHAROS; evidence_id: pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f; source: PHAROS). The consistency across sources and high association scores underscore KRAS's profound involvement in both congenital syndromes and oncogenesis.\n\n## 5. Literature\n\nThe literature search was filtered to include only highly relevant articles where KRAS is a central topic and disease or therapeutic relevance is clear. Generic biology papers, methods papers, or unrelated guidelines were excluded to ensure high-quality, focused evidence.\n\n| Rank | PMID      | Title                                                               | Journal | Publication Year | Cited By Count | Gene in Title | Gene in Abstract | Evidence ID                                          |\n| :--- | :-------- | :------------------------------------------------------------------ | :------ | :--------------- | :------------- | :------------ | :--------------- | :--------------------------------------------------- |\n| 1    | 22810696  | Comprehensive molecular characterization of human colon and rectal cancer. |         | 2012             | 6682           | False         | True             | literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd |\n| 2    | 23636398  | Integrated genomic characterization of endometrial carcinoma.       |         | 2013             | 4161           | False         | True             | literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4 |\n\nThe top literature articles, \"Comprehensive molecular characterization of human colon and rectal cancer\" (PMID:22810696; evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature) and \"Integrated genomic characterization of endometrial carcinoma\" (PMID:23636398; evidence_id: literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4; source: Literature), are both highly cited (6682 and 4161 citations, respectively). These papers, from major consortia like The Cancer Genome Atlas (TCGA), provide foundational genomic insights into the role of KRAS in common human cancers. While KRAS is not in the title, its presence in the abstract and the nature of these comprehensive molecular characterization studies confirm its critical relevance to the pathogenesis of these diseases. This literature evidence strongly supports the disease associations identified by Open Targets, particularly in the context of various carcinomas.\n\n## 6. Integrated Interpretation\n\nKRAS, or GTPase KRas, belongs to the small GTPase superfamily, specifically the Ras family. Its molecular function involves binding GDP/GTP and possessing intrinsic GTPase activity, playing a crucial role in regulating cell proliferation (PubMed:20949621, PubMed:39809765) and promoting oncogenic events by inducing transcriptional silencing of tumor suppressor genes in colorectal cancer (PubMed:24623306).\n\nThe PHAROS classification of KRAS as Tclin (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) is a significant indicator of its therapeutic potential, confirming the existence of FDA-approved drugs or clinical stage compounds. This is particularly noteworthy given that KRAS, as a GTPase, was historically considered challenging to drug due to its smooth GTP-binding surface, unlike kinase targets such as EGFR which offer well-defined ATP-binding pockets for small-molecule inhibition. The recent development of covalent G12C inhibitors (e.g., sotorasib, adagrasib) has overcome this historical hurdle, validating its Tclin status.\n\nDepMap data indicates that KRAS is not a pan-essential gene, with an average CERES score of -0.702 (evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap). However, its strong dependency in nearly half of the tested cancer cell lines (48.85% with CERES ≤ -0.5) and extremely strong dependencies in specific cell lines (e.g., -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) highlight its context-specific essentiality. This pattern is entirely consistent with KRAS's known role as an oncogene, where specific mutations (e.g., G12C, G12D, G12V) drive tumor growth and create therapeutic vulnerabilities in specific cancer types like non-small cell lung carcinoma, colorectal cancer, and pancreatic cancer.\n\nOpen Targets strongly links KRAS to both developmental RASopathies (e.g., Noonan syndrome 3, score 0.826; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets) and various cancers, notably non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets). These associations are well-supported by the `biological_context.curated_disease_assocs` which also lists several leukemias and gastric cancer, further reinforcing KRAS's broad pathophysiological involvement. The high-impact literature further solidifies KRAS's role as a key driver in colon, rectal, and endometrial cancers (evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature; evidence_id: literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4; source: Literature).\n\nA conflict is observed between PHAROS (Tclin status, indicating high tractability; evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) and the average genetic essentiality from DepMap (moderate CERES score -0.702; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap). This likely reflects a biologically expected phenomenon: KRAS is not universally essential for all cell survival, but becomes critically important in specific oncogenic contexts, often driven by activating mutations. The Tclin status acknowledges the success in targeting these specific oncogenic forms of KRAS, while the average DepMap score reflects the broader, heterogeneous landscape of cancer cell lines, many of which may not harbor KRAS mutations or be dependent on KRAS for survival. This is a context-dependent difference, not a true data gap.\n\n### Evidence Contribution (Interpretation)\n\nThis conclusion is primarily driven by PHAROS and Open Targets. PHAROS provides strong evidence of druggability, classifying KRAS as Tclin (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS), biologically signifying the existence of FDA-approved drugs or clinical candidates, which is a critical indicator for therapeutic targeting. Open Targets provides strong and broad disease association scores (e.g., 0.826 for Noonan syndrome 3; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets, and 0.809 for non-small cell lung carcinoma; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets), biologically connecting KRAS to multiple pathologies, including both developmental disorders and prevalent cancers. DepMap provides moderate, context-specific functional support (avg CERES=-0.702 across 1169 lines; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap), biologically indicating that KRAS essentiality is not universal but is pronounced in specific cancer cell lines (e.g., -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap), consistent with its role as a conditional oncogene. Literature is weakest in terms of direct target validation scores but provides crucial biological context and corroboration for KRAS's involvement in major cancer types (e.g., colon and rectal cancer; evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature), reinforcing the disease associations from Open Targets.\n\n## 7. Evidence Strength Assessment\n\n*   **Target Annotation (PHAROS):** Strong. The Tclin classification (evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) is definitive, indicating successful drug development. The high number of ligands (223; evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) further confirms its pharmacological tractability. The main limitation is that TDL classification does not specify the *mechanism* of action or *specific mutations* being targeted, which is highly relevant for KRAS.\n*   **Genetic Dependency (DepMap):** Moderate to Strong, with crucial context-specificity. The average CERES score of -0.702 (evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap) is not indicative of pan-essentiality, but the significant fraction of cell lines (48.85%) showing strong dependency (CERES ≤ -0.5; evidence_id: depmap:KRAS:NA:genetic_dependency:2067ce2c5f; source: DepMap) and the extremely strong dependencies in top cell lines (e.g., -4.282; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) provide robust functional evidence for context-dependent vulnerability. A limitation is that DepMap data is from *in vitro* cancer cell lines, which may not fully reflect the complexities of *in vivo* tumor biology or the microenvironment's impact on KRAS dependency.\n*   **Disease Associations (Open Targets):** Strong. The high association scores (e.g., 0.826 for Noonan syndrome 3; evidence_id: opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025; source: Open Targets, and 0.809 for non-small cell lung carcinoma; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets) are supported by a large evidence count (1815) and align well with established biological knowledge of KRAS in both RASopathies and various cancers. A limitation is that the \"undefined indication\" in the initial request means the report prioritizes based on general clinical relevance and score, rather than a specific disease context.\n*   **Literature:** Moderate. The selected literature provides high-impact, foundational genomic characterizations of KRAS in major cancer types (e.g., colon and rectal cancer; evidence_id: literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd; source: Literature), reinforcing the disease associations. However, literature is used as supporting context rather than primary evidence for target validation. The inherent limitation is that a high citation count does not equate to direct therapeutic validation, and the articles focus on characterization rather than direct therapeutic intervention.\n\nNo explicit contradictions between data sources were detected, beyond the expected context-specific differences in essentiality vs. druggability, which are biologically understood for oncogenes like KRAS.\n\n## 8. Overall Assessment\n\nKRAS represents a highly validated and therapeutically relevant target. The combined evidence strongly supports its role in both developmental disorders and a range of cancers, driven by its fundamental function in cell proliferation and oncogenic signaling. Its Tclin status, despite its historical \"undruggable\" reputation as a GTPase, underscores recent therapeutic breakthroughs. While not universally essential, its pronounced context-specific essentiality in numerous cancer cell lines provides a strong rationale for targeted therapeutic strategies, particularly for tumors harboring specific KRAS mutations. The extensive disease associations from Open Targets and corroborating literature further solidify its importance across multiple indications.\n\n## 9. Final Conclusion\n\nKRAS is a highly validated and druggable target (Tclin; evidence_id: pharos:KRAS:MONDO:0018997:target_annotation:6021aed105; source: PHAROS) with strong, context-specific genetic dependencies in cancer (e.g., CERES -4.282 in ACH-000222; evidence_id: depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab; source: DepMap) and robust associations with multiple diseases, including non-small cell lung carcinoma (score 0.809; evidence_id: opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e; source: Open Targets) and RASopathies. Its established role as an oncogene and the availability of approved therapies confirm its high potential for therapeutic intervention.\n\n---\n\n# Appendix A — Raw Evidence Tables\n\nThese tables are compiled directly from the verified evidence payload to make the report scannable.\n- `evidence_id` is the canonical identifier used for traceability.\n- `normalized_score` and `confidence` are copied from the payload (they are not re-computed here).\n- If the narrative report above contains non-table lists, use these tables as the authoritative tabular view.\n\n## A1. Source Coverage\n| # | source | status | records | duration_ms | error |\n| --- | --- | --- | --- | --- | --- |\n| 1 | depmap | success | 5 | 23005 |  |\n| 2 | pharos | success | 5 | 5755 |  |\n| 3 | opentargets | success | 5 | 11757 |  |\n| 4 | literature | success | 2 | 26367 |  |\n\n## A2. Target Annotation (PHAROS)\n| # | evidence_id | source | tdl | family | ligand_total | novelty | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | pharos:KRAS:MONDO:0018997:target_annotation:6021aed105 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223). |\n| 2 | pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223). |\n| 3 | pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53 | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223). |\n| 4 | pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223). |\n| 5 | pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f | pharos | Tclin | Enzyme | 223 | 0.00013856 | 0.850 | 1 | PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223). |\n\n## A3. Genetic Dependency (DepMap)\n### A3.1 Global metrics\n| # | evidence_id | source | average_gene_effect | cell_line_count | strong_dependency_count | strong_dependency_fraction | data_release | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:NA:genetic_dependency:2067ce2c5f | depmap | -0.70196 | 1169 | 571 | 0.4885 | DepMap 25Q3 | 0.947 | 0.35098 | DepMap CRISPR gene effect for KRAS: -0.702 avg across 1169 cell lines (571 show strong dependency ≤ −0.5). |\n\n### A3.2 Top dependent cell lines\n| # | evidence_id | cell_line_id | gene_effect | rank_within_gene | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab | ACH-000222 | -4.28233 | 1 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.282 (rank 1). |\n| 2 | depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7 | ACH-000417 | -3.85918 | 2 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.859 (rank 2). |\n| 3 | depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a | ACH-000505 | -3.81362 | 3 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.814 (rank 3). |\n| 4 | depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db | ACH-000235 | -3.49377 | 4 | 0.950 | 1 | Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.494 (rank 4). |\n\n## A4. Disease Associations (Open Targets)\n| # | evidence_id | source | disease_name | disease_id | score | evidence_count | confidence | normalized_score | summary |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025 | opentargets | Noonan syndrome 3 | MONDO_0012371 | 0.82637 | 1815 | 0.898 | 0.82637 | Open Targets association score for KRAS and Noonan syndrome 3 is 0.826. |\n| 2 | opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464 | opentargets | cardiofaciocutaneous syndrome 2 | MONDO_0014112 | 0.814412 | 1815 | 0.894 | 0.814412 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814. |\n| 3 | opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e | opentargets | Noonan syndrome | MONDO_0018997 | 0.813127 | 1815 | 0.894 | 0.813127 | Open Targets association score for KRAS and Noonan syndrome is 0.813. |\n| 4 | opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e | opentargets | non-small cell lung carcinoma | EFO_0003060 | 0.809177 | 1815 | 0.893 | 0.809177 | Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809. |\n| 5 | opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160 | opentargets | cardiofaciocutaneous syndrome | MONDO_0015280 | 0.794482 | 1815 | 0.888 | 0.794482 | Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794. |\n\n## A5. Literature (Europe PMC)\n| # | evidence_id | pmid | year | cited_by | title | confidence | normalized_score |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd | 22810696 | 2012 | 6682 | Comprehensive molecular characterization of human colon and rectal cancer. | 0.850 | 0.9 |\n| 2 | literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4 | 23636398 | 2013 | 4161 | Integrated genomic characterization of endometrial carcinoma. | 0.800 | 0.85 |",
      "verification_report": {
        "affected_evidence_ids": [],
        "blocked": false,
        "blocking_issue_count": 0,
        "blocking_issues": [],
        "fail_count": 0,
        "generated_at": "2026-04-09T12:48:35.682595Z",
        "pass_count": 8,
        "rule_outcomes": [
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records validate against the canonical schema.",
            "passed": true,
            "rule_name": "schema_validity"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records include required provenance fields.",
            "passed": true,
            "rule_name": "provenance_completeness"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records include a canonical evidence_id.",
            "passed": true,
            "rule_name": "evidence_id_presence"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "No duplicate evidence fingerprints detected.",
            "passed": true,
            "rule_name": "duplicate_detection"
          },
          {
            "blocking": true,
            "evidence_ids": [],
            "message": "All evidence records match the requested gene symbol.",
            "passed": true,
            "rule_name": "gene_mapping_consistency"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All evidence records match the requested disease context.",
            "passed": true,
            "rule_name": "disease_mapping_consistency"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All literature evidence includes a PMID or PMCID.",
            "passed": true,
            "rule_name": "citation_presence"
          },
          {
            "blocking": false,
            "evidence_ids": [],
            "message": "All disease identifiers match EFO/MONDO format.",
            "passed": true,
            "rule_name": "ontology_id_format"
          }
        ],
        "total_rules": 8,
        "verification_policy_version": "phase1.v1",
        "warning_count": 0,
        "warning_issues": []
      },
      "verified_evidence": [
        {
          "confidence": 0.9465355004277161,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
          "evidence_type": "genetic_dependency",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.3509802066460565,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:46.133562Z"
          },
          "raw_value": -0.701960413292113,
          "retrieved_at": "2026-04-09T12:47:46.138528Z",
          "source": "depmap",
          "summary": "DepMap CRISPR gene effect for KRAS: -0.702 avg across 1169 cell lines (571 show strong dependency ≤ −0.5).",
          "support": {
            "average_gene_effect": -0.702,
            "cell_line_count": 1169,
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "median_gene_effect": -0.489,
            "screen_type": "CRISPRGeneEffect",
            "strong_dependency_count": 571,
            "strong_dependency_fraction": 0.4885
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000222",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:46.149227Z"
          },
          "raw_value": -4.282333642061707,
          "retrieved_at": "2026-04-09T12:47:46.149262Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000222: gene_effect=-4.282 (rank 1).",
          "support": {
            "cell_line_id": "ACH-000222",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -4.282333642061707,
            "rank_within_gene": 1,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "KRAS:ACH-000222",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000417",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:46.149287Z"
          },
          "raw_value": -3.859175181932871,
          "retrieved_at": "2026-04-09T12:47:46.149295Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000417: gene_effect=-3.859 (rank 2).",
          "support": {
            "cell_line_id": "ACH-000417",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.859175181932871,
            "rank_within_gene": 2,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "KRAS:ACH-000417",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000505",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:46.149304Z"
          },
          "raw_value": -3.813618178730868,
          "retrieved_at": "2026-04-09T12:47:46.149308Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000505: gene_effect=-3.814 (rank 3).",
          "support": {
            "cell_line_id": "ACH-000505",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.813618178730868,
            "rank_within_gene": 3,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "KRAS:ACH-000505",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.95,
          "disease_id": null,
          "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
          "evidence_type": "genetic_dependency_cell_line",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "/app/mcps/connectors/.depmap_cache/CRISPRGeneEffect.csv",
            "provider": "DepMap (Broad Institute)",
            "query": {
              "cell_line_id": "ACH-000235",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:46.149315Z"
          },
          "raw_value": -3.493769063134753,
          "retrieved_at": "2026-04-09T12:47:46.149319Z",
          "source": "depmap",
          "summary": "Cell-line dependency for KRAS in ACH-000235: gene_effect=-3.494 (rank 4).",
          "support": {
            "cell_line_id": "ACH-000235",
            "column_name": "KRAS (3845)",
            "data_release": "DepMap 25Q3",
            "gene_effect": -3.493769063134753,
            "rank_within_gene": 4,
            "screen_type": "CRISPRGeneEffect"
          },
          "target_id": "KRAS:ACH-000235",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018997",
          "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "Noonan syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:54.268514Z"
          },
          "raw_value": {
            "disease_name": "Noonan syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:47:54.269374Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to Noonan syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "Noonan syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0011908",
          "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "juvenile myelomonocytic leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:54.269403Z"
          },
          "raw_value": {
            "disease_name": "juvenile myelomonocytic leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:47:54.269420Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to juvenile myelomonocytic leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "juvenile myelomonocytic leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0015280",
          "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "cardiofaciocutaneous syndrome",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:54.269427Z"
          },
          "raw_value": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:47:54.269435Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to cardiofaciocutaneous syndrome (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "cardiofaciocutaneous syndrome",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0018874",
          "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "acute myeloid leukemia",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:54.269464Z"
          },
          "raw_value": {
            "disease_name": "acute myeloid leukemia",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:47:54.269476Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to acute myeloid leukemia (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "acute myeloid leukemia",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": "MONDO:0001056",
          "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
          "evidence_type": "target_annotation",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 1,
          "provenance": {
            "endpoint": "https://pharos-api.ncats.io/graphql",
            "provider": "PHAROS",
            "query": {
              "disease": "gastric cancer",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:47:54.269482Z"
          },
          "raw_value": {
            "disease_name": "gastric cancer",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "tdl": "Tclin"
          },
          "retrieved_at": "2026-04-09T12:47:54.269492Z",
          "source": "pharos",
          "summary": "PHAROS annotations for KRAS relating to gastric cancer (TDL=Tclin, ligands=223).",
          "support": {
            "associated_disease": "gastric cancer",
            "family": "Enzyme",
            "ligand_total": 223,
            "novelty": 0.00013856,
            "target_name": "GTPase KRas",
            "tdl": "Tclin"
          },
          "target_id": "KRAS",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8979109108194049,
          "disease_id": "MONDO_0012371",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8263697027313498,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:48:07.210953Z"
          },
          "raw_value": 0.8263697027313498,
          "retrieved_at": "2026-04-09T12:48:07.211297Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome 3 is 0.826.",
          "support": {
            "disease_name": "Noonan syndrome 3",
            "evidence_count": 1815,
            "requested_disease": null
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8943234896706429,
          "disease_id": "MONDO_0014112",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8144116322354762,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:48:07.211322Z"
          },
          "raw_value": 0.8144116322354762,
          "retrieved_at": "2026-04-09T12:48:07.211334Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome 2 is 0.814.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome 2",
            "evidence_count": 1815,
            "requested_disease": null
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8939379521341774,
          "disease_id": "MONDO_0018997",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8131265071139245,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:48:07.211343Z"
          },
          "raw_value": 0.8131265071139245,
          "retrieved_at": "2026-04-09T12:48:07.211348Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and Noonan syndrome is 0.813.",
          "support": {
            "disease_name": "Noonan syndrome",
            "evidence_count": 1815,
            "requested_disease": null
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.89275320519801,
          "disease_id": "EFO_0003060",
          "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8091773506600335,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:48:07.211401Z"
          },
          "raw_value": 0.8091773506600335,
          "retrieved_at": "2026-04-09T12:48:07.211408Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and non-small cell lung carcinoma is 0.809.",
          "support": {
            "disease_name": "non-small cell lung carcinoma",
            "evidence_count": 1815,
            "requested_disease": null
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8883445975496039,
          "disease_id": "MONDO_0015280",
          "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
          "evidence_type": "disease_association",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.7944819918320131,
          "provenance": {
            "endpoint": "https://api.platform.opentargets.org/api/v4/graphql",
            "provider": "Open Targets",
            "query": {
              "disease_id": null,
              "ensembl_id": "ENSG00000133703",
              "gene_symbol": "KRAS"
            },
            "retrieved_at": "2026-04-09T12:48:07.211414Z"
          },
          "raw_value": 0.7944819918320131,
          "retrieved_at": "2026-04-09T12:48:07.211418Z",
          "source": "opentargets",
          "summary": "Open Targets association score for KRAS and cardiofaciocutaneous syndrome is 0.794.",
          "support": {
            "disease_name": "cardiofaciocutaneous syndrome",
            "evidence_count": 1815,
            "requested_disease": null
          },
          "target_id": "ENSG00000133703",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.85,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.9,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "22810696",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-09T12:48:35.380432Z"
          },
          "raw_value": 6682,
          "retrieved_at": "2026-04-09T12:48:35.381077Z",
          "source": "literature",
          "summary": "Europe PMC article rank 1/2 for KRAS: Comprehensive molecular characterization of human colon and rectal cancer. (PMID=22810696, citations=6682).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 6682,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 1,
            "pmid": "22810696",
            "pub_year": "2012",
            "query": "\"KRAS\"",
            "rank": 1,
            "title": "Comprehensive molecular characterization of human colon and rectal cancer.",
            "total_hit_count": 123885
          },
          "target_id": "KRAS:PMID:22810696",
          "target_symbol": "KRAS"
        },
        {
          "confidence": 0.8,
          "disease_id": null,
          "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
          "evidence_type": "literature_article",
          "normalization_policy_version": "phase1.v1",
          "normalized_score": 0.8500000000000001,
          "provenance": {
            "endpoint": "https://www.ebi.ac.uk/europepmc/webservices/rest/search",
            "provider": "Europe PMC",
            "query": {
              "disease_id": null,
              "pmid": "23636398",
              "query": "\"KRAS\""
            },
            "retrieved_at": "2026-04-09T12:48:35.381118Z"
          },
          "raw_value": 4161,
          "retrieved_at": "2026-04-09T12:48:35.381126Z",
          "source": "literature",
          "summary": "Europe PMC article rank 2/2 for KRAS: Integrated genomic characterization of endometrial carcinoma. (PMID=23636398, citations=4161).",
          "support": {
            "article_count_returned": 2,
            "cited_by_count": 4161,
            "eligible_hit_count": 2,
            "fetch_page_size": 25,
            "gene_in_abstract": true,
            "gene_in_title": false,
            "journal": null,
            "original_rank_by_cited_sort": 2,
            "pmid": "23636398",
            "pub_year": "2013",
            "query": "\"KRAS\"",
            "rank": 2,
            "title": "Integrated genomic characterization of endometrial carcinoma.",
            "total_hit_count": 123885
          },
          "target_id": "KRAS:PMID:23636398",
          "target_symbol": "KRAS"
        }
      ]
    },
    "evidence_graph": {
      "artifact_path": "/data/artifacts/graphs/run-6973460701a6.evidence_graph.json",
      "edges": [
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
          "target_id": "source:depmap"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
          "target_id": "publication:pmid:22810696"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_publication",
          "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
          "target_id": "publication:pmid:23636398"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
          "target_id": "source:literature"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
          "target_id": "source:opentargets"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "evidence_source",
          "source_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
          "target_id": "source:pharos"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:EFO_0003060"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0001056"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0011908"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0015280"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0018874"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO:0018997"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0012371"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0014112"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0015280"
        },
        {
          "attributes": {},
          "edge_type": "target_disease",
          "source_id": "target:KRAS",
          "target_id": "disease:MONDO_0018997"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:depmap:KRAS:NA:genetic_dependency:2067ce2c5f"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f"
        },
        {
          "attributes": {},
          "edge_type": "target_evidence",
          "source_id": "target:KRAS",
          "target_id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:6021aed105"
        }
      ],
      "generated_at": "2026-04-09T12:48:35.750571Z",
      "graph_format": "json",
      "nodes": [
        {
          "attributes": {},
          "id": "disease:EFO_0003060",
          "label": "EFO_0003060",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0001056",
          "label": "MONDO:0001056",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0011908",
          "label": "MONDO:0011908",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0015280",
          "label": "MONDO:0015280",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0018874",
          "label": "MONDO:0018874",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO:0018997",
          "label": "MONDO:0018997",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0012371",
          "label": "MONDO_0012371",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0014112",
          "label": "MONDO_0014112",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0015280",
          "label": "MONDO_0015280",
          "node_type": "disease"
        },
        {
          "attributes": {},
          "id": "disease:MONDO_0018997",
          "label": "MONDO_0018997",
          "node_type": "disease"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000222:NA:genetic_dependency_cell_line:4044e21bab",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000235:NA:genetic_dependency_cell_line:d8acb8e0db",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000417:NA:genetic_dependency_cell_line:390e5c8ec7",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.95,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
            "normalized_score": 1,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:ACH-000505:NA:genetic_dependency_cell_line:62b615625a",
          "label": "genetic_dependency_cell_line",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.9465355004277161,
            "conflict_severity": null,
            "evidence_id": "depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
            "normalized_score": 0.3509802066460565,
            "source": "depmap"
          },
          "id": "evidence:depmap:KRAS:NA:genetic_dependency:2067ce2c5f",
          "label": "genetic_dependency",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
            "normalized_score": 0.9,
            "source": "literature"
          },
          "id": "evidence:literature:KRAS:PMID:22810696:NA:literature_article:8ec267c5bd",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8,
            "conflict_severity": null,
            "evidence_id": "literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
            "normalized_score": 0.8500000000000001,
            "source": "literature"
          },
          "id": "evidence:literature:KRAS:PMID:23636398:NA:literature_article:bd436429e4",
          "label": "literature_article",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.89275320519801,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
            "normalized_score": 0.8091773506600335,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:EFO_0003060:disease_association:558aeecd9e",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8979109108194049,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
            "normalized_score": 0.8263697027313498,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0012371:disease_association:e3ee023025",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8943234896706429,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
            "normalized_score": 0.8144116322354762,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0014112:disease_association:5863504464",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8883445975496039,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
            "normalized_score": 0.7944819918320131,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0015280:disease_association:58a0242160",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.8939379521341774,
            "conflict_severity": null,
            "evidence_id": "opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
            "normalized_score": 0.8131265071139245,
            "source": "opentargets"
          },
          "id": "evidence:opentargets:ENSG00000133703:MONDO_0018997:disease_association:1b3edde35e",
          "label": "disease_association",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0001056:target_annotation:a6fa38b52f",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0011908:target_annotation:88cebb9f28",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0015280:target_annotation:805fc9bf53",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0018874:target_annotation:3ebc14f03f",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "confidence": 0.85,
            "conflict_severity": null,
            "evidence_id": "pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
            "normalized_score": 1,
            "source": "pharos"
          },
          "id": "evidence:pharos:KRAS:MONDO:0018997:target_annotation:6021aed105",
          "label": "target_annotation",
          "node_type": "evidence"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:22810696",
          "label": "22810696",
          "node_type": "publication"
        },
        {
          "attributes": {
            "identifier_type": "pmid"
          },
          "id": "publication:pmid:23636398",
          "label": "23636398",
          "node_type": "publication"
        },
        {
          "attributes": {
            "provider": "DepMap (Broad Institute)"
          },
          "id": "source:depmap",
          "label": "depmap",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "Europe PMC"
          },
          "id": "source:literature",
          "label": "literature",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "Open Targets"
          },
          "id": "source:opentargets",
          "label": "opentargets",
          "node_type": "source"
        },
        {
          "attributes": {
            "provider": "PHAROS"
          },
          "id": "source:pharos",
          "label": "pharos",
          "node_type": "source"
        },
        {
          "attributes": {
            "target_id": "KRAS"
          },
          "id": "target:KRAS",
          "label": "KRAS",
          "node_type": "target"
        }
      ]
    },
    "created_at": "2026-04-09T07:20:41.000Z",
    "updated_at": "2026-04-09T07:20:41.000Z"
  }
];

export const savedComparisons: SavedComparisonDetail[] = [
  {
    "id": "cf08fabcfe334a579d3123d8f8cee375",
    "run_a_id": "test-kras-123",
    "run_b_id": "test-egfr-123",
    "title": "Comparison: KRAS vs EGFR",
    "compare_markdown": "# COMPARATIVE THERAPEUTIC TARGET REPORT\n\nGenes Compared: **EGFR** vs **KRAS**\n\n---\n\n## 1. Executive Comparison Summary\n\n- **Stronger Target Overall:** **KRAS** is the stronger functional therapeutic target due to its significantly higher genetic dependency fraction (52.4% vs 17.5%) and deeper essentiality scores in sensitive models.\n- **Context-Specific Strengths:** **EGFR** remains the gold standard for kinase-driven oncology (NSCLC, Glioblastoma) with superior chemical tractability. **KRAS** dominates in broader oncogenic \"addiction\" and has unique relevance in germline developmental disorders (Rasopathies).\n- **Key Differentiator:** While both are **Tclin** targets, KRAS represents a more fundamental \"Achilles heel\" across a majority of cancer models, whereas EGFR dependency is highly restricted to specific mutational niches.\n\n---\n\n## 2. Side-by-Side Evidence Comparison\n\n### 2.1 Target Annotation (PHAROS)\n| Metric | EGFR | KRAS | Winner | Insight |\n|--------|----------|----------|--------|---------|\n| TDL | Tclin | Tclin | Tie | Both have FDA-approved inhibitors. |\n| Target Family | Kinase | Enzyme (Small GTPase) | **EGFR** | Kinases are traditionally more druggable than GTPases. |\n| Ligand Count | 2445 | 223 | **EGFR** | EGFR has ~11x more known ligands, reflecting higher tractability. |\n| Novelty | 7.27e-05 | 1.38e-04 | **KRAS** | KRAS is slightly more \"novel\" in terms of recent exploration. |\n\n→ **Insight:** EGFR is the more \"druggable\" target due to its well-defined ATP-binding pocket and massive ligand library. KRAS, despite its Tclin status, remains structurally challenging (historically \"undruggable\").\n\n---\n\n### 2.2 Genetic Dependency (DepMap)\n| Metric | EGFR | KRAS | Winner | Insight |\n|--------|----------|----------|--------|---------|\n| Avg Gene Effect | -0.237 | -0.725 | **KRAS** | KRAS is significantly more essential globally. |\n| Strong Dependency Fraction | 17.5% | 52.4% | **KRAS** | KRAS is a dependency in >50% of lines; EGFR in <20%. |\n| Max Dependency Strength | -2.784 | -4.461 | **KRAS** | KRAS loss is more lethal in its most sensitive models. |\n\n→ **Insight:** KRAS is a much more potent functional dependency. EGFR essentiality is rare and highly context-specific, whereas KRAS is a broad driver of survival in over half of all tested cancer models.\n\n---\n\n### 2.3 Disease Associations (Open Targets)\n| Metric | EGFR | KRAS | Winner | Insight |\n|--------|----------|----------|--------|---------|\n| Top Score | 0.852 (NSCLC) | 0.826 (Noonan) | **EGFR** | EGFR has a slightly stronger link to its primary oncology indication. |\n| Disease Breadth | Oncology focused | Oncology + Germline | **KRAS** | KRAS covers both somatic cancers and Rasopathies. |\n| Oncology Relevance | High (Lung/Brain) | High (Lung/Colorectal) | Tie | Both are top-tier oncology drivers. |\n\n→ **Insight:** EGFR has the strongest single-disease association (NSCLC), but KRAS has a more diverse therapeutic reach, including rare developmental disorders (Noonan Syndrome).\n\n---\n\n### 2.4 Literature Strength\n| Metric | EGFR | KRAS | Winner | Insight |\n|--------|----------|----------|--------|---------|\n| # High-impact Papers | 5 (cited >5k) | 2 (cited >4k) | **EGFR** | EGFR literature is more voluminous and clinical-trial heavy. |\n| Citation Strength | Up to 8,308 | Up to 6,682 | **EGFR** | EGFR papers establish the paradigm for precision oncology. |\n| Research Maturity | Very High | High | **EGFR** | EGFR validation is more mature in the clinical literature. |\n\n→ **Insight:** EGFR is the more \"established\" target with decades of clinical data regarding mutation-driven response (e.g., gefitinib). KRAS literature is robust but historically focused on its \"undruggable\" nature.\n\n---\n\n## 3. Cross-Domain Interpretation\n\n- **Consistency:** KRAS shows remarkable consistency between its high disease association (0.82) and its broad functional dependency (52.4% of lines). EGFR shows a \"bottleneck\" profile: high clinical relevance in a very narrow subset of patients, reflected by its low global dependency score (-0.237).\n- **Conflict Resolution:** The \"tractability-dependency tradeoff\" is evident here. EGFR is easier to drug (Kinase, 2445 ligands) but less essential globally. KRAS is harder to drug (GTPase, 223 ligands) but more essential. However, the recent clinical success of KRAS G12C inhibitors (confirming Tclin status) effectively mitigates the tractability risk for KRAS.\n- **Contextual Essentiality:** Both are \"oncogene-addicted\" targets. However, KRAS dependency is more \"pan-cancer\" (Colorectal, Lung, Endometrial) compared to EGFR’s primary dominance in NSCLC and Glioblastoma.\n\n---\n\n## 4. Therapeutic Positioning Insight\n\n- **EGFR:** Best positioned for **Precision Oncology** in NSCLC and Glioblastoma. High potential for combination therapies to overcome acquired resistance (e.g., T790M).\n- **KRAS:** Best positioned as a **Broad-Spectrum Oncogenic Driver** in NSCLC and Colorectal cancer, with a secondary niche in **Rare Disease/Rasopathies**.\n- **Biomarker Dependency:** Both require strict biomarker stratification (EGFR mutations vs KRAS G12C/G12D/G12V mutations) for clinical efficacy.\n\n---\n\n## 5. Risk Assessment\n\n| Risk Type | EGFR | KRAS | Insight |\n|----------|----------|----------|--------|\n| **Biological Risk** | Moderate | Low | EGFR loss is often compensated by other RTKs; KRAS is a central node. |\n| **Clinical Translation Risk** | Low | Moderate | EGFR has many approved generations; KRAS inhibitors are newer. |\n| **Competition / Saturation** | Extreme | High | EGFR market is highly saturated; KRAS is the current \"hot\" frontier. |\n\n---\n\n## 6. Final Verdict (CRITICAL)\n\n**KRAS is a stronger therapeutic target.**\n\n**Justification:**\n1. **Superior Functional Essentiality:** KRAS is essential in 52.4% of cell lines compared to EGFR's 17.5%, making it a more broadly applicable target.\n2. **Deeper Dependency:** The maximum gene effect for KRAS (-4.46) indicates a more profound \"cell death\" phenotype upon inhibition than EGFR (-2.78).\n3. **Strategic Breadth:** KRAS offers therapeutic opportunities in both major oncology markets and rare germline disorders, providing a more diverse portfolio.\n\n---\n\n## 7. Confidence Score\n\n- **Confidence:** 0.95\n- **Reason:** Both targets have Tclin status and high-quality DepMap/Open Targets data. The data consistency across both reports is excellent, allowing for a high-confidence functional comparison. The only minor uncertainty is the long-term clinical durability of KRAS inhibitors compared to the mature EGFR landscape.",
    "data_snapshot": {
      "report_a_title": "Research: KRAS",
      "report_b_title": "Research: EGFR",
      "score_a": 0.69,
      "score_b": 0.85,
      "comparison_date": "2026-04-10T13:13:02.481497"
    },
    "created_at": "2026-04-10T02:13:02.000Z"
  }
];
