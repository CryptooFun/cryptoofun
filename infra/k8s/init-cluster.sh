#!/bin/bash

istioctl install --set profile=demo -y

helm install --namespace redis redis-release oci://registry-1.docker.io/bitnamicharts/redis --create-namespace

kubectl create ns cf
kubectl label namespace cf istio-injection=enabled
