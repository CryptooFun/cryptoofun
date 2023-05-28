# 🔥⚙ Instructions: Load Testing

1. Spin up a Kubernetes cluster.
2. Deploy the CryptooFun application(s)/service(s) you want to test out within the scope.
3. Create the configmaps specific to the test. For instance, use the following for Trade Butler test:

```sh
kubectl create configmap my-loadtest-locustfile --from-file ./trade_butler_isolated/main.py
kubectl create configmap my-loadtest-lib --from-file ./lib/
```

4. Install the Locust Helm chart with the proper values:

```sh
helm repo add deliveryhero https://charts.deliveryhero.io/
helm repo update

# (trade butler example continues...)

helm install locust deliveryhero/locust \
  --set loadtest.name=trade-butler-isolated \
  --set loadtest.locust_locustfile_configmap=my-loadtest-locustfile \
  --set loadtest.locust_lib_configmap=my-loadtest-lib \
  --set loadtest.pip_packages[0]=pyjwt[crypto] \
  --set loadtest.locust_host='http://trade-butler.cf.svc.cluster.local:7170' \
  --set worker.replicas=5

# One liner:
helm install locust deliveryhero/locust --set loadtest.name=trade-butler-isolated --set loadtest.locust_locustfile_configmap=my-loadtest-locustfile --set loadtest.locust_lib_configmap=my-loadtest-lib --set loadtest.pip_packages[0]=pyjwt[crypto] --set loadtest.locust_host='http://trade-butler.cf.svc.cluster.local:7170' --set worker.replicas=5
```

5. Forward the master UI to your localhost and move onto a browser:

```sh
kubectl --namespace default port-forward service/locust 8089:8089
```
