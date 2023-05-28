import random, uuid
from lib.access_token_gen import gen
from locust import HttpUser, task, between

user_id = uuid.uuid4().hex
access_token = gen(user_id)
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
    wait_time = between(5.0, 15.0)

    def on_start(self):
        self.client.headers = {
            "Authorization": f"Bearer {access_token}",
            "User-Agent": "Mozilla/5.0 (Linux; U; Linux x86_64; en-US) AppleWebKit/535.50 (KHTML, like Gecko) Chrome/55.0.2743.385 Safari/601",
        }

    @task
    def post_trade_order(self):
        self.client.post(
            "/",
            json={
                "orderType": "MARKET",
                "intent": "BUY",
                "ticker": random.choice(tickerSymbols),
                "amount": round(random.uniform(0.00000000000001, 100), 14),
                "price": -1,
            },
        )
