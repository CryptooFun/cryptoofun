from time import time as now
import jwt

PRIV_KEY = b"-----BEGIN RSA PRIVATE KEY-----\nMIICWwIBAAKBgGYsQ8X8QfxM5aPUGnqLLgQjqg3TbFoHiYtAf16N6j1MfxN/u9TE\n19GprcSBTOGLd25drS5vbXuNfDGTyvjtRCGkQvROIeVTNLCC48zQwwnGBaK6hy0s\nsccyY9/dhdsmPteEg1rWG8+fIlP4lqNFwmpUluD7yCKc3bYHvmOoHFlXAgMBAAEC\ngYAoAkdbvOcd5AK8f28K83tGday+kz7HllH+7Hez0ACcllrgiNFFhPs6B6aa30L6\nwwE2f4o0N7/4dLPgOg5uIYLe5XMmeT5yzG0PSf7g+oXNI3x/eNpseFBsmTFwWy70\ncOCu4m9g1ExG8FWsvmB2dg1G8gPIiKpFlvckcB567Z9SWQJBALw76NyvlwuAiTtO\nbZoCss3LM7YqNoaWnvyHVyG0AZxDHyGJrgMuRtqD2WGdtRkHdMN7SLp8At/7wmh8\n/mNgVYUCQQCK9MKto5+9qjNmNNmHYpV2hWZLhOHK9NoqkaIJAbSr4O221hcLt5CQ\nD/BZc6PXrqZJ/EvZPtBuPSSopzReKMwrAkEAjIwXFSCuoVH6JaQrxgEZzPtawzvF\ntrykPV44utuTEEA18G7C1XEqSmKEX5TH8cZVctiMt2F9LAzpXedmcoEtmQJAdATe\nktoeIt774WdZBJgEURwaiA1f9PQxP/+uebSp5CR+df0U6tyOYCpetGFAOHIDN5zm\nu3Gd151HgWVx7PhFVwJAEho7rFstpPdPu+vDxs5dzvSD4CRAs7p8sIsxPGOBLyuk\n1F5whnftNnX6fll6DWvaRq7AREGdXMUQWeDYuD1Lhg==\n-----END RSA PRIVATE KEY-----"
PUBL_KEY = b"-----BEGIN PUBLIC KEY-----\nMIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGYsQ8X8QfxM5aPUGnqLLgQjqg3T\nbFoHiYtAf16N6j1MfxN/u9TE19GprcSBTOGLd25drS5vbXuNfDGTyvjtRCGkQvRO\nIeVTNLCC48zQwwnGBaK6hy0ssccyY9/dhdsmPteEg1rWG8+fIlP4lqNFwmpUluD7\nyCKc3bYHvmOoHFlXAgMBAAE=\n-----END PUBLIC KEY-----"


def gen(user_id):
    one_day_in_sec = 86400
    iat = now()
    exp = iat + one_day_in_sec

    token = jwt.encode(
        {
            "https://api.cryptoofun/roles": ["user"],
            "iss": "https://cryptoofun.eu.auth0.com/",
            "sub": user_id,
            "aud": [
                "https://api.cryptoofun",
                "https://cryptoofun.eu.auth0.com/userinfo",
            ],
            "iat": iat,
            "exp": exp,
            "azp": "MhwgBUTyT4H0xd1hO7xq3zTyoque8UOy",
            "scope": "openid profile email",
            "permissions": ["read:services", "write:services"],
        },
        PRIV_KEY,
        algorithm="RS256",
    )
    return token
