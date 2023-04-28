kubectl apply -f .\platform\scylladb --namespace=scylla
kubectl apply -f .\platform\ --namespace=cf
kubectl apply -f .\networking\ --namespace=cf
@REM kubectl apply -f .\security\ --namespace=cf
@REM kubectl apply -f .\security\authn-policies\ --namespace=cf
