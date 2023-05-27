istioctl install --set profile=demo -y

helm install --namespace redis redis-release oci://registry-1.docker.io/bitnamicharts/redis --create-namespace

kubectl create ns cf
kubectl label namespace cf istio-injection=enabled

$REDIS_PWD = kubectl get secret --namespace redis redis-release -o jsonpath="{.data.redis-password}"
@"
apiVersion: v1
kind: Secret
metadata:
  name: redis-secrets
type: Opaque
data:
  password: $REDIS_PWD
"@ > redis-secrets.yml

kubectl apply -f redis-secrets.yml -n cf
rm redis-secrets.yml

echo "[Reminder] Apply the remaining K8S secrets."
