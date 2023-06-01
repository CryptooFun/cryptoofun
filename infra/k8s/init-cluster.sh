#!/bin/bash

istioctl install --set profile=demo -y

helm install --namespace redis redis-release oci://registry-1.docker.io/bitnamicharts/redis --create-namespace

kubectl create ns cf
kubectl label namespace cf istio-injection=enabled

kubectl -n cf apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: redis-secrets
type: Opaque
data:
  password: $(kubectl get secret --namespace redis redis-release -o jsonpath="{.data.redis-password}")
EOF

echo "[Reminder] Apply the remaining K8S secrets."
