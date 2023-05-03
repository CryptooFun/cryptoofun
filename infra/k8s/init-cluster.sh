#!/bin/bash

istioctl install --set profile=demo -y

kubectl create ns cf
kubectl create ns scylla
kubectl label namespace cf istio-injection=enabled
