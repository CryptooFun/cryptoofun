# Setup

### Kubernetes Cluster:

- **Platform:** GCP - Google Kubernetes Engine
- **Version:** 1.25.8-gke.500
- **Configuration:** e2-standard-2 x 3 nodes = 6 vCPUs + 24 GB memory
- **Location:** europe-west4-b

### Locust:

- **Worker Replicas:** 5

### Trade Butler

- **Replicas**: 7
- **Version:** pre-release/5 + Kafka Publisher improvements with asynchronous handling

### Data Platforms

- **Kafka Cluster:** [Conduktor.io](https://www.conduktor.io/) Enterprise Trial

  - Topics: Partitions = 7, Replication Factor = 3, Initial Record Size >= 2.5 millions
  - Location: Unknown

- **Cassandra Cluster:** [DataStax AstraDB Serverless](https://www.datastax.com/products/datastax-astra)
  - Location: GCP - europe-west1
