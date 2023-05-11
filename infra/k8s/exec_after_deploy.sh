EXTERNAL_IP=$(kubectl get svc istio-ingressgateway -n istio-system -o=jsonpath="{.status.loadBalancer.ingress[0].ip}")

kubectl set env deployment/webapp-v1 AUTH0_BASE_URL="http://$EXTERNAL_IP"
