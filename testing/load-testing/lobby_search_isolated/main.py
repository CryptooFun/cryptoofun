import random
from locust import HttpUser, task, between

keywords = [
    "F",
    "Fresh",
    "Beginner",
    "Another",
    "Awesome",
    "Ad Inf",
    "Samurai",
    "Sa",
    "Sam",
    "Destiny",
    "Dest",
    "Des",
    "Fre",
    "Thunderbold",
    "2023",
    "Thu",
    "June",
    "A",
]


class LobbyUser(HttpUser):
    wait_time = between(5.0, 15.0)

    def on_start(self):
        self.client.headers = {
            "User-Agent": "Mozilla/5.0 (Linux; U; Linux x86_64; en-US) AppleWebKit/535.50 (KHTML, like Gecko) Chrome/55.0.2743.385 Safari/601",
        }

    @task
    def post_trade_order(self):
        self.client.get(f"/lobby?keyword={random.choice(keywords)}")
