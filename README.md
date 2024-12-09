# dengue-virus-genome-browser
Interactive genome browser for Dengue virus (DENV-1 to DENV-4) with comprehensive functional annotations and genomic visualization tools.

## About

This project is a genome browser built with JBrowse 2, tailored for exploring the genomes of the four main Dengue virus serotypes: DENV-1, DENV-2, DENV-3, and DENV-4. It includes functional annotations for key genes and provides an intuitive interface for genomic research.

## Features
Detailed Annotations: Functional insights into key genes such as E, NS1, and NS5, highlighting their roles in the virus lifecycle.
Genome Visualization: Interactive tracks for all four Dengue virus serotypes.
Customizable Tracks: Add or remove tracks based on research needs.
Search and Zoom: Explore specific genome regions with ease.

## Installation

### Requirements
Node.js (v16 or higher)
JBrowse 2 CLI

### Local Deployment
1.Clone the repository:
```
  git clone https://github.com/yourusername/dengue-virus-genome-browser.git  
  cd dengue-virus-genome-browser  
```

2.Install JBrowse CLI:
```
  npm install -g @jbrowse/cli  
```

3.Start the browser locally:
```
  jbrowse admin-server --port 9090 --root /path/to/repository  
```

4.Access the browser at http://localhost:9090.

### GitHub Pages Hosting
1.Enable GitHub Pages for your repository:
•Go to Settings > Pages.
•Set the source to the main branch.
2.Your genome browser will be available at:
```
  https://yourusername.github.io/dengue-virus-genome-browser/
```


## Genome Data

This project includes data for the following serotypes:
•DENV-1: Genome and annotations (FASTA/GFF3).
•DENV-2: Genome and annotations (FASTA/GFF3).
•DENV-3: Genome and annotations (FASTA/GFF3).
•DENV-4: Genome and annotations (FASTA/GFF3).

## Key Genes and Annotations

Gene	Function	Role in Virus Lifecycle
E	Envelope Protein	Facilitates viral entry and fusion.
NS1	Nonstructural Protein 1	Immune modulation and replication.
NS5	RNA-dependent RNA polymerase (RdRp)	Key in genome replication.

Known Issues
•Mutations and specific epitope annotations are currently limited.
•Ensure proper GFF3 indexing for visualization.

## Acknowledgements

This genome browser was developed as part of BIO231: Introduction to Computational Biology at UC Berkeley. Thanks to the teaching staff for their support.


## Contact

For any questions or feedback, contact:
YIN Ziyuan - zy1001@berkeley.edu
