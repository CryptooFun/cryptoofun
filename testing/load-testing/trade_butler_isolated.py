import random
from locust import HttpUser, task, constant_throughput

access_token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRjNFRkaFhPWDB0cEdPeGN1aGdDQyJ9.eyJodHRwczovL2FwaS5jcnlwdG9vZnVuL3JvbGVzIjpbInVzZXIiXSwiaXNzIjoiaHR0cHM6Ly9jcnlwdG9vZnVuLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NDUwNGMwMzYyNzUyMGIyYjljMmE4NWUiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuY3J5cHRvb2Z1biIsImh0dHBzOi8vY3J5cHRvb2Z1bi5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjgzMTExNDY4LCJleHAiOjE2ODMxOTc4NjgsImF6cCI6Ik1od2dCVVR5VDRIMHhkMWhPN3hxM3pUeW9xdWU4VU95Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbInJlYWQ6c2VydmljZXMiLCJ3cml0ZTpzZXJ2aWNlcyJdfQ.IW3LSB2fhjI3rqYChOZ4DtaHQfZNWVOPp83H2LstiKabUCw1NkpKabICSpzHzhirg3mj-rx-S0Vhl9_YMtVv-YZzf3pmpBwmUYdloTqHy2Ht6zSAjK-ZMO3l-uKqNnGUJOxt-MASqXnUkJVGf6GUbkGSa51n6HNDyQMtKJGvI3bQ4-lwmbb3w67oapyrp-2e9sAKl7TEK8xJQUPmvTdMif5fGUxBmrLBg5B04IDS1LuSXSy0HwYkoFK90O06supP3DjpUfO19GzEVeePMElW5Bzow7_QxaWumx5WqWdnB1QLQmxV2R2E4UFutACkRCRc4cl2FjmyR4Lz4yVAy-hfAw"
tickerSymbols = [
    "BTC_USDT",
    "ETH_USDT",
    "XRP_USDT",
    "BNB_USDT",
    "XLM_USDT",
    "DOGE_USDT",
    "MATIC_USDT",
    "ADA_USDT",
]


class TradeButlerUser(HttpUser):
    wait_time = constant_throughput(0.1)

    def on_start(self):
        self.client.headers = {"Authorization": f"Bearer {access_token}"}

    @task
    def post_trade_order(self):
        self.client.post(
            "/",
            json={
                "orderType": "MARKET",
                "intent": "BUY",
                "ticker": random.choice(tickerSymbols),
                "amount": round(random.uniform(0.00000000000001, 100), 14),
            },
        )
