kind create cluster --image=kindest/node:v1.26.3 --name=cryptoofun

istioctl install --set profile=demo -y

kubectl create ns cf
kubectl label namespace cf istio-injection=enabled

kubectl config set-context kind-cryptoofun --namespace=cf
