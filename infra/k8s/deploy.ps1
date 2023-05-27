kubectl apply -f .\platform\ --namespace=cf
kubectl apply -f .\networking\ --namespace=cf
kubectl apply -f .\security\ --namespace=cf
kubectl apply -f .\security\authn-policies\ --namespace=cf
