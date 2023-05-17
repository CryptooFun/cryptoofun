docker build . -f .\cash-wallet\Dockerfile -t gcr.io/cryptoofun/cash-wallet:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/cash-wallet:1.0-SNAPSHOT

docker build . -f .\portfolio\Dockerfile -t gcr.io/cryptoofun/portfolio:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/portfolio:1.0-SNAPSHOT

docker build . -f .\profile\Dockerfile -t gcr.io/cryptoofun/profile:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/profile:1.0-SNAPSHOT

docker build . -f .\leaderboard\Dockerfile -t gcr.io/cryptoofun/leaderboard:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/leaderboard:1.0-SNAPSHOT

docker build . -f .\lobby\Dockerfile -t gcr.io/cryptoofun/lobby:1.0-SNAPSHOT
docker push gcr.io/cryptoofun/lobby:1.0-SNAPSHOT
