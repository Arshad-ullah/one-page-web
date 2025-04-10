'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2bbb30930849004e1d40e4c7e8186acf",
"version.json": "ebdc21b0f29e242f34e7a27429908918",
"index.html": "66a2ffa9ed4d94b463d30d67555ca932",
"/": "66a2ffa9ed4d94b463d30d67555ca932",
"main.dart.js": "4a7b85517109db89a8a9e8763a7eff94",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3129101ff47e2af1a640284b1349c1a6",
"assets/AssetManifest.json": "749cb518aaef3c25afbc46d76ffb3fe0",
"assets/NOTICES": "4ecc3943e42f8686bb05226285f5b8b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c5cf28f88d2454502e333215140f125a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/dpgames_flutter/shorebird.yaml": "20cc6e6aa964405c1cd4aee417f85d1c",
"assets/packages/dpgames_flutter/fonts/Akrobat-Bold.otf": "e592c9850a6620fff5708450e1775b5a",
"assets/packages/dpgames_flutter/assets/jsons/win_rate.json": "7dc74baac503985800c99bcf386e40e4",
"assets/packages/dpgames_flutter/assets/images/home/pin-fill.png": "f44dab2921378efcb9c5016bf3cbebd5",
"assets/packages/dpgames_flutter/assets/images/home/scroll_top_night.png": "ecd8ac40e239adbddf592f8382e4c24c",
"assets/packages/dpgames_flutter/assets/images/home/search_history_text_del.svg": "ca5b40822b068f44f3809cb6b13628dd",
"assets/packages/dpgames_flutter/assets/images/home/pin.png": "6febe4cca19a32f7afb5c0e52d649041",
"assets/packages/dpgames_flutter/assets/images/home/alarm_light.7edb.webp": "25ab8057a3bc06fa693cb64eaa70f18f",
"assets/packages/dpgames_flutter/assets/images/home/league_search.svg": "de15bf80a34fd82b2790520308703ad9",
"assets/packages/dpgames_flutter/assets/images/home/baseball-hit-icon.svg": "e506335515ba708311e161cfc48a7597",
"assets/packages/dpgames_flutter/assets/images/home/league_search_inner.svg": "7f20399cec9daa4ffadcd4ef4693dfad",
"assets/packages/dpgames_flutter/assets/images/home/empty_light.png": "ff5e0e2ac292bb5a2afa5be0becb524e",
"assets/packages/dpgames_flutter/assets/images/home/search_history_del.svg": "1ed4d2a4bebf44485253976621f35c6a",
"assets/packages/dpgames_flutter/assets/images/home/img.png": "324ed370e80bfe6a3b3c2720d2c75707",
"assets/packages/dpgames_flutter/assets/images/home/baseball-hit-night-icon.svg": "3d102aaaeec95975bd68cbfb066c0f78",
"assets/packages/dpgames_flutter/assets/images/home/league_search_inner_night.svg": "aef9f167616d45a968d07d566e023297",
"assets/packages/dpgames_flutter/assets/images/home/league-close-icon.svg": "bb4609e5df1e1bfdeb0b2b96e7e7406a",
"assets/packages/dpgames_flutter/assets/images/home/midfield_icon_grey_app.svg": "aa65d812bec9fd5b16243b528f7494b4",
"assets/packages/dpgames_flutter/assets/images/home/search_history_text_del_night.svg": "2294bb87377cb984dd6344f417a9bea5",
"assets/packages/dpgames_flutter/assets/images/home/league-close-icon-night.svg": "474822d56c22e232f21d80b4698a4ef9",
"assets/packages/dpgames_flutter/assets/images/home/union.svg": "4bf0cfc5ece4eb1e93fbe8be8335d511",
"assets/packages/dpgames_flutter/assets/images/home/alarm_dark.9e3a.webp": "17940c277cec0719082355b61ce653c9",
"assets/packages/dpgames_flutter/assets/images/home/scroll_top.png": "a47388196fae7205de0278148e898ffb",
"assets/packages/dpgames_flutter/assets/images/home/midfield_icon_app.svg": "e65a4a1ff6a3d49700fe8d546bd68608",
"assets/packages/dpgames_flutter/assets/images/bets/icon_down.gif": "d21046124983e05350432ef634904074",
"assets/packages/dpgames_flutter/assets/images/bets/icon_up.gif": "598e767235bfe409c51b8e2f5feff384",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/296-active.png": "a24a36da98d15270cecb73ade2745186",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-2-active.png": "095022cb4e28a380ca05e0d78a01f421",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/278-active.png": "75b2bfbd5294a36deb8256ab83fcbb7c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/292-dark.png": "52b0b03cd972422224e2cb7224b75ae8",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/293-dark.png": "fa89abf0e35776ee4bde6a34544f0683",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/287-active.png": "956b28b62340f8226b65b44a55a6734f",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/277-dark.png": "0aeb8103b2b6721cba20f3e24f0be668",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/276-dark.png": "bfb10d4aa5efb384d774343123e2e42e",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/282-active.png": "d16d3e9833e8c280319beb4d90c6da02",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-3-dark.png": "a46bafad8b7d39406d071fcf10955eb0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-2-dark.png": "0440717a42749e33edd0eb68206d0a2f",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/285-dark.png": "b190ff38d2c55ebee71b7dcb430388f2",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/293-active.png": "fa25f6a61a57852e1d7f10039b992940",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/294-active.png": "ef0b1772d1301b5df402fe8ba4928511",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/277.png": "ce49e5fc67820c19856d65635e9a094c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/288.png": "eb234403df1b9af394375d8f5ead92ce",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/288-dark.png": "d74e53beb42f081b21f67788079edb4c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/289-dark.png": "326596c6f58c7b3a2ba722f8eeaf29a0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/289.png": "8cb9c318dc5d0a4ec310ca17a189820a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/276.png": "6a834e0c75839108e13760d35810ddbc",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/288-active.png": "1d0e6a997234351da606973c012c6c42",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/277-active.png": "bd8d4c5ac4fb10272bfade7d9bca9767",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/282-dark.png": "1aec9fce21a88f0b82ab67f1e1669d2a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/285-active.png": "625f948c8c97324b84981dd34f4e6307",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/280-active.png": "92207890bc5c7586577e31752cb53c08",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/291-active.png": "b08600637bc990b10306b180b475abe0",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/295-dark.png": "bc49df268f684d96ab6e7bad937514f7",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/294-dark.png": "0ddfc0c79fc27f3e18a40b014d3eb774",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/286-dark.png": "f1d51ee93b9432dceff44d59947684e9",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/287-dark.png": "9e439c29aea731b94ede382ab28016b5",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/281.png": "465371330d0698c8e4cf2543fe747443",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/295.png": "86ebafb170c21755760f95397b4a2124",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/294.png": "8b85ac7ed6c9458373a3af2c000a289a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/280.png": "2a28731ab870e1f9bbfd8ddfa17e9e2c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/296.png": "6f5fe77e521908b3ba4d179daf8f1811",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/282.png": "169a830d296b2b848374bfe6ffe12986",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/297.png": "67fcc0329a73d8e0088fbc2ec86730cb",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/292-active.png": "72498ffa8453c1af74c9bb82fe454964",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/291-dark.png": "1af0b88c130cf06cdfb660928c5113f3",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/290-dark.png": "d2f35b96180eb13195bbdac6610278dd",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/278.png": "042e14a0d04d5567ebda2404295bd0dc",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/293.png": "4e9220d52d4ccc46a509c4cd35dafaef",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/287.png": "e1446d5a8b5dfc5e818d8829ab74224a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/286.png": "74e94929e310db8b8470e62b89250948",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/292.png": "620133b4186e1e10c9d45bea4389f26a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/279.png": "3fcab641fb81466e5707d2466b0a07fd",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-3-active.png": "87e25bdbfba82210d04895989bfc4058",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/297-active.png": "e6743e0c090d5171129a0f49f23a1202",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/286-active.png": "452122143656a6fe9de7892db9c79649",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/279-active.png": "42fe066a5c31e893e2323bf9817926a4",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/290.png": "9282aff9ad8cd77cd0fd9961a349035a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/291.png": "91023bb2aa5099b2688a5b857308ff94",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/285.png": "49d6331df8ace85e5d7ffe06386602fd",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/296-dark.png": "f192213e2cc165c252fc140dee83ca06",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/297-dark.png": "130d82564bd6d09886da81cf814b8e99",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/281-active.png": "2f9684f586bc7f337e823e7a9eadf1cc",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-3.png": "cb9e7bbb5a7b5f46ee47137c79484e14",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/290-active.png": "29bef06ce5ba4062e284bf974401c867",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/-2.png": "f300e71a93532c856bc29ee86366e73c",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/279-dark.png": "d3cfed53e1df99b75ad30db003e84c11",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/278-dark.png": "ec703de1d964afcf8874b94de256f451",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/281-dark.png": "e2cfc66842024fd7f7415838f9c40e22",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/280-dark.png": "6aa64e2fe2c42635aee43a0ea3a79359",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/295-active.png": "48d7eeb7d85e217f729663fc7bb45758",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/276-active.png": "96ad09b20e9852189f02dd98f7d7b91a",
"assets/packages/dpgames_flutter/assets/images/sport-icons-h5/289-active.png": "2bb57aa13faff0bb36576686d629b70e",
"assets/packages/dpgames_flutter/assets/images/hot-leagues/sportstab_ico_40_sel.png": "b6070c712b4064d6dda5aed7aea8d5e4",
"assets/packages/dpgames_flutter/assets/images/hot-leagues/sportstab_ico_4_sel.png": "b2237a92542ee78d31e74c53f59a645a",
"assets/packages/dpgames_flutter/assets/images/djbg/291.webp": "b16075ab08361550f04b30eeaa6d9ef4",
"assets/packages/dpgames_flutter/assets/images/djbg/286.webp": "90428dbbf9df12b3a44efc306a2f66b5",
"assets/packages/dpgames_flutter/assets/images/djbg/290.webp": "571c53957f83cb8a0fa7129954538712",
"assets/packages/dpgames_flutter/assets/images/djbg/297.webp": "ac14729cd4d592bc19aa786c4fdd28f2",
"assets/packages/dpgames_flutter/assets/images/djbg/278.webp": "ae8209279a9a10de9f99616cc38174d6",
"assets/packages/dpgames_flutter/assets/images/djbg/281.webp": "2758f170f76cdfd96f6745cf5bd96812",
"assets/packages/dpgames_flutter/assets/images/djbg/002.webp": "4a32d0268f33197ea283b6125eda5b5f",
"assets/packages/dpgames_flutter/assets/images/djbg/280.webp": "29019fc79eaf5e019f4236055118a815",
"assets/packages/dpgames_flutter/assets/images/djbg/296.webp": "08af4190f01678a04e70448a1bf67f97",
"assets/packages/dpgames_flutter/assets/images/djbg/279.webp": "11b1e6ac3f0201a84fcd07dcc0062a2f",
"assets/packages/dpgames_flutter/assets/images/djbg/000.webp": "01a6c0cc2b681b21813aa7da097162c0",
"assets/packages/dpgames_flutter/assets/images/djbg/295.webp": "951078e8f098e8e320830c9d960ed074",
"assets/packages/dpgames_flutter/assets/images/djbg/276.webp": "01312147c6248ba1c5f49d1787ebbe01",
"assets/packages/dpgames_flutter/assets/images/djbg/277.webp": "305ad89c07ca99517811c0e64bb4e5f3",
"assets/packages/dpgames_flutter/assets/images/djbg/294.webp": "6d595890390cef827c53d530cbb36e3a",
"assets/packages/dpgames_flutter/assets/images/djbg/282.webp": "d7819ed95b0c0ae96efeb7aae1791ebc",
"assets/packages/dpgames_flutter/assets/images/djbg/001.webp": "1a88fdc0c52c7ad3761812b0431ca37c",
"assets/packages/dpgames_flutter/assets/images/djbg/289.webp": "236c9ae37a1feb52c8931f52b9dd574d",
"assets/packages/dpgames_flutter/assets/images/djbg/285.webp": "53df0cdd8eebbdaf6b7c0dc06efa4337",
"assets/packages/dpgames_flutter/assets/images/djbg/293.webp": "d5e338c908a884677c152417d843519c",
"assets/packages/dpgames_flutter/assets/images/djbg/292.webp": "d1fe751cef4cc905410bdf6eb70956a1",
"assets/packages/dpgames_flutter/assets/images/djbg/288.webp": "c7e0bcbd6780944ef8c1f4b46741a671",
"assets/packages/dpgames_flutter/assets/images/language/fa_IR.png": "c7b213ab7d77c84279d25429e58a0c0a",
"assets/packages/dpgames_flutter/assets/images/language/ja_jp.png": "21a49ca92e76131236578df335e0237d",
"assets/packages/dpgames_flutter/assets/images/league/seaction_expand.png": "55e4e6c564cfe68f3713aa4d5b856ff7",
"assets/packages/dpgames_flutter/assets/images/league/icon_arrow_right_grey.png": "19d6ee24cf1328f01b672e121119c569",
"assets/packages/dpgames_flutter/assets/images/league/icon_all.png": "c4e0645f96c1562b2a1dd10d0018909a",
"assets/packages/dpgames_flutter/assets/images/league/seaction_pin.png": "ff5557885a23be2b8412760b29cfb742",
"assets/packages/dpgames_flutter/assets/images/league/sportstab_ico_0_nor_league.png": "00cae287fc02fc7c16bf64ebcf5a5f4a",
"assets/packages/dpgames_flutter/assets/images/shopcart/fullscreen-bet-confirmed.svg": "ac6c77d9d40121d3cd50b5d54751be54",
"assets/packages/dpgames_flutter/assets/images/shopcart/closed_pic1.png": "1bf4236a624c13629f224f9b5e1a6bc3",
"assets/packages/dpgames_flutter/assets/images/shopcart/closed_bg2.png": "cbf8e91adbbdf0f58de33919f6c2a544",
"assets/packages/dpgames_flutter/assets/images/shopcart/fullscreen-bet-confirm.svg": "0cf77f01bf2fc57a182be7f4ed2f861e",
"assets/packages/dpgames_flutter/assets/images/common/empty_dark.png": "7d28353e422926caa5fc256c5d994130",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_bg_dark.png": "42614eff36d16ad7ca6403580b27669d",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_bg_dark.png": "ac29d113b1d05047e08df71463eddb41",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_bg_light.png": "f29dac42bfbd8aa9a992c97d1a5a8756",
"assets/packages/dpgames_flutter/assets/images/common/over.png": "1aa5b67937459359ec8ed0ef3770dcf6",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_dark.png": "7423c542e3907d407d24be9df38f04b7",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_bg_light.png": "3ca364ef192934dfafccd36c3f2fb7f4",
"assets/packages/dpgames_flutter/assets/images/common/empty_light.png": "ff5e0e2ac292bb5a2afa5be0becb524e",
"assets/packages/dpgames_flutter/assets/images/common/val.png": "79557dd78bacd9cff0d116ff9c36c0d0",
"assets/packages/dpgames_flutter/assets/images/common/icon_close_white.svg": "635abf9f1577623e2f3329c0c4b76c4f",
"assets/packages/dpgames_flutter/assets/images/common/h5_battle.png": "ad8237c5228633d3c02b9ca839663211",
"assets/packages/dpgames_flutter/assets/images/common/h5_king.png": "782a42d485176ab0c8b6d47bae5b8982",
"assets/packages/dpgames_flutter/assets/images/common/noob_sample_light.png": "ae010c1a15b835d12dde96baffd3f012",
"assets/packages/dpgames_flutter/assets/images/common/h5_endless.png": "006fa78e2ee12bf4a83895fd26382da0",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_light.png": "0d07059c6f8767057502130b2b71a23f",
"assets/packages/dpgames_flutter/assets/images/common/h5_dota.png": "170eff5e532480becbde02ffa20dce61",
"assets/packages/dpgames_flutter/assets/images/common/h5_csgo.png": "188888508c9d0755f1bd2729749e1cb5",
"assets/packages/dpgames_flutter/assets/images/common/h5_lol.png": "ce950aee1d1a53f63c6a1a521424f82d",
"assets/packages/dpgames_flutter/assets/images/common/pro_sample_dark.png": "b74c770f124ffcbe80fb1ad6276f5732",
"assets/packages/dpgames_flutter/assets/images/detail/result_top.svg": "4a3fbb60eab09fb60013b6d5c365f5ce",
"assets/packages/dpgames_flutter/assets/images/detail/def_common_night.svg": "b8f40c727f623c3a6962aed6ba0ec828",
"assets/packages/dpgames_flutter/assets/images/detail/video_play.svg": "bf88f0e1ddd1bfb91a8ea017e79b59ac",
"assets/packages/dpgames_flutter/assets/images/detail/dj_result_active.svg": "d9d06c34bf9f87bad783f1daf9b06b72",
"assets/packages/dpgames_flutter/assets/images/detail/def_common.svg": "eaf42d17549479cbcf2591af957f6ae7",
"assets/packages/dpgames_flutter/assets/images/detail/video_fixed.png": "75d31ca03ce1c1d1a459de58a02f0df5",
"assets/packages/dpgames_flutter/assets/images/detail/dj_result_night.svg": "1b038467eed4984112879a3635073109",
"assets/packages/dpgames_flutter/assets/images/detail/video_unfixed.png": "edcd8b4409ba1a2d064e9f4bca610c40",
"assets/packages/dpgames_flutter/assets/images/detail/live-app.svg": "8103fefbc7151d700b85a5b60738f7ad",
"assets/packages/dpgames_flutter/assets/images/detail/fullscreen-bet.svg": "151a195480b8d3920aa4c1033e4fd85e",
"assets/packages/dpgames_flutter/assets/images/detail/animate-app.svg": "a60af69cc568d89e1a9e188274166acf",
"assets/packages/dpgames_flutter/assets/images/detail/scroll_top.webp": "453f495a519e1ba6763fd96819cce11a",
"assets/packages/dpgames_flutter/assets/images/detail/fullscreen-lock.svg": "4aa02aee4f1ba607a7a1cd5064dd3d96",
"assets/packages/dpgames_flutter/assets/images/detail/play_corner.svg": "b164825efd2afc0995f3bea5f38682ef",
"assets/packages/dpgames_flutter/assets/images/detail/def_marketclose.png": "e88ede6a2cb1d0d7ad28117218c3db1d",
"assets/packages/dpgames_flutter/assets/images/detail/bg/eSports_default.png": "034fe023ef53dff874e0134b5a015794",
"assets/packages/dpgames_flutter/assets/images/detail/bg/football.jpg": "5e9f6d359b97909aef36d77001622bfd",
"assets/packages/dpgames_flutter/assets/images/detail/bg/basketball.jpg": "33f58174deab4bdc10737171e285420c",
"assets/packages/dpgames_flutter/assets/images/detail/bg/cricket_ball.png": "6f644add709376dc2a4c74402dbbe05a",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-12.webp": "4b5b281000ac27fb1e52b82b2cb5697b",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-28.webp": "cb576fea809124e0e6932ef2710500f3",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-1.webp": "6da0316dc508647414c9a57006195587",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-13.webp": "5fa2c68ee10074cfaeb6d4d917b24e72",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-18.webp": "1b2a79f2f2280e421db079624647cb81",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-6.webp": "2d179dfca863c5e343f4ccf37b19dab1",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-23.webp": "3cfef2a17e817d7655a11097a32bcaf9",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-19.webp": "1f8c617a6ffa90570d5be0349cb18e4e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-8.webp": "c51bab70422871291280985f64766d3e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-16.webp": "ec1d0f3308fc8db592e23872f32d2aff",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-5.webp": "6539387b1e38cd3ec4854f3d3c592830",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/esports.webp": "25acdeb7016030ec78cb430756741fe0",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-9.webp": "bfe72208aa4f80aba4b0eab023e719cb",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-2.webp": "b76d5ae3fb7332478d22311896edf06e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-10.webp": "c6af991eca96d085d46e1f5735e9dfca",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-11.webp": "41f759e93f13308939422f92c9c6aa7e",
"assets/packages/dpgames_flutter/assets/images/detail/dp-bg/sport-3.webp": "b61cd6d8386bc724e667cda023426789",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/ownGoal.svg": "fdc52ee003c8d62582159d80b21933f3",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/substitution-icon.svg": "072f2a447bb1911f7b81c949aa23ef60",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/goal-icon.svg": "0fdd21976d80903b97ac337d41c623c1",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/var-night.svg": "f377827e774995f6e395f634a2ca24a3",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/fan-gui-b.svg": "41a288cf3b391ff3f42f90cf0a322aef",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/er-fen-de-fen-night.svg": "bbdfc11f2d58da6d127ba5bb613527c1",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/missed-penalty-icon-night.svg": "4aa4fbd412423979723b25cdc302a568",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/var.svg": "453afc3a99d0c0e113f690a249ea854b",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/substitution-icon-night.svg": "237f41f6dac8134c17db1177e6a2c7c8",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-yellow.svg": "ba2c7f87b7a2a9e8f5fcab9744bcc0e3",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/assist-night.svg": "1dc4f1bfe165fbfc09a7e660746ab9ce",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/assist.svg": "c2599721d6b85502af2acf9477d403db",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/missed-penalty-icon.svg": "d0af073c72101f244e57846d0c8c4c6f",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/shootNotScore.svg": "f6ee99e654dd7bb0cecdc985259bc62e",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-icons-arrow-up.svg": "89531d094fa55e86d76e0750a27e0c07",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/goal-icon-night.svg": "ca77037b61aca8553e5ba58a2306a2de",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/freeThrowScored.svg": "36e3e7096424c5370bca10d11d9f328e",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/er-fen-de-fen.svg": "c51729aec24db87b1b3980fe902cb608",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-icons-arrow-down.svg": "2e1d9e47a702eb2804e5e7bc3fe1e361",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/corner-icon.svg": "3ef2597b50b7d2877331a49f59e2c505",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/towyellowonered-icon.svg": "bd9026b99ac703e7cb7fd7271b7d6ec1",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/freeThrowMissed-night.svg": "1c0b4f18b6d6f38584019b919942b562",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/corner-icon-night.svg": "308eb1e706ba78235c9236f912497da5",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/event-red.svg": "bbc24f19023658166cf42015f1a68365",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/freeThrowMissed.svg": "88b38843cfd0c71a85441c892cc9f889",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/penalty-kick-icon.svg": "3173f421a1512b43ea6934262ce9292c",
"assets/packages/dpgames_flutter/assets/images/detail/match-event/shootNotScore-night.svg": "c6047e0ac054700a9de936d9100c1244",
"assets/packages/dpgames_flutter/assets/images/detail/ico_new_cornerkick.svg": "f5b0df382e5520e24945f13200908358",
"assets/packages/dpgames_flutter/assets/images/detail/dj_result.svg": "ad12645bd6fe291b2548b2513590f988",
"assets/packages/dpgames_flutter/assets/images/detail/def_nocollection.png": "9881618b5e2526f7fc3a4f54ebc85901",
"assets/packages/dpgames_flutter/assets/images/detail/fullscreen-nodata-lock.svg": "ae800f0854c13f54a0ced307d8e11652",
"assets/packages/dpgames_flutter/assets/images/detail/result_top_night.svg": "72cd7f17ba5f88d3bbac7eecf260aa13",
"assets/packages/dpgames_flutter/assets/images/icon/tutorial_background_darks.png": "9f0a80872a31de77c63a8c404b309159",
"assets/packages/dpgames_flutter/assets/images/icon/result_tab.svg": "3d5fd883feb361287993b9f673d280b3",
"assets/packages/dpgames_flutter/assets/images/currency/BND.png": "da2f26b20d2b5bac87fc4328ae213efe",
"assets/packages/dpgames_flutter/assets/images/currency/KRW.png": "ddf20125fa1b5f9f78fb152231c0bcf8",
"assets/packages/dpgames_flutter/assets/images/currency/PEN.png": "1933a503265dc8897d6e1760271fc37c",
"assets/packages/dpgames_flutter/assets/images/currency/AED.png": "631d6761b651bd57ce49a31a84a08449",
"assets/packages/dpgames_flutter/assets/images/currency/RMB.png": "74901c24426376d714de384a8faa307a",
"assets/packages/dpgames_flutter/assets/images/currency/SGD.png": "dabdcf3f763f5a7e25b280bc959df390",
"assets/packages/dpgames_flutter/assets/images/currency/GBP.png": "ab936f349f80ff184d9f7ed56ed177db",
"assets/packages/dpgames_flutter/assets/images/currency/BDT.png": "92e4c92418d8bdd6ddb84903f75f8c38",
"assets/packages/dpgames_flutter/assets/images/currency/JPY.png": "f52d2e97600adc51476a157792252609",
"assets/packages/dpgames_flutter/assets/images/currency/MYR.png": "a14709ff2c09a71460ab15ea0984056e",
"assets/packages/dpgames_flutter/assets/images/currency/HKD.png": "06a03297f667d230164f176627857e60",
"assets/packages/dpgames_flutter/assets/images/currency/USD.png": "d3cfd3c1e5086e47756c4233bfd1b841",
"assets/packages/dpgames_flutter/assets/images/currency/RUB.png": "99e9f9b6fcc683a7247c8df5e2e39b1f",
"assets/packages/dpgames_flutter/assets/images/currency/USDT.png": "6b65b8f56a6b3e5dc38003b8d59d4d6a",
"assets/packages/dpgames_flutter/assets/images/currency/BRL.png": "8a0009070c062959f85dcb2a9390369b",
"assets/packages/dpgames_flutter/assets/images/currency/INR.png": "660eec9b9bd146eeaf9876875e9c839a",
"assets/packages/dpgames_flutter/assets/images/currency/ZMW.png": "c1fce8b0304ca4127570aa275302b147",
"assets/packages/dpgames_flutter/assets/images/currency/CNY.png": "74901c24426376d714de384a8faa307a",
"assets/packages/dpgames_flutter/assets/images/currency/AUD.png": "5ea746958a7f484bf9d5f8ed973241be",
"assets/packages/dpgames_flutter/assets/images/currency/MOP.png": "ba69f21a4c2b9561befe8f347768ad7c",
"assets/packages/dpgames_flutter/assets/images/currency/MXN.png": "c6be3ead03ef901377b4c8313ec6e6c8",
"assets/packages/dpgames_flutter/assets/images/currency/EUR.png": "8c596aabb187429039795f53b6ecb278",
"assets/packages/dpgames_flutter/assets/images/currency/MMK.png": "37fbf00886c02d92a3f189cfab197e95",
"assets/packages/dpgames_flutter/assets/images/currency/ZAR.png": "e3b4339cabc7470eebd5688f04d8f91b",
"assets/packages/dpgames_flutter/assets/images/currency/TWD.png": "e0a53ae1a86cb80be2cbb1470fa817f4",
"assets/packages/dpgames_flutter/assets/images/currency/VND.png": "90e012687ec734e71641a2b71276f794",
"assets/packages/dpgames_flutter/assets/images/currency/CAD.png": "70b0902526ea53c15a074dac59a431da",
"assets/packages/dpgames_flutter/assets/images/currency/IDR.png": "e3bddc4123b5489f2ec01cb0cc825dd8",
"assets/packages/dpgames_flutter/assets/images/currency/TRY.png": "6d5f81249c40a052528cf6ff73b3d01f",
"assets/packages/dpgames_flutter/assets/images/currency/THB.png": "cb0b911b63e0d939d436fa6c27dfef69",
"assets/packages/dpgames_flutter/assets/images/currency/PHP.png": "924fbc69bd1507c88002c598b695dc11",
"assets/packages/dpgames_flutter/assets/images/currency/KES.png": "72afe19b16f52187644119efe2adb16e",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1855bccca184ed0b4bb385dca1e37de9",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/assets/images/splash1.png": "7457a0892b432182f227f5fcb98df4c6",
"assets/assets/images/login_start1.png": "f6bee2d25ff5938a321068a8e06aa458",
"assets/assets/images/splash3.png": "67002233e7a8c03af054ee5743a763c0",
"assets/assets/images/splash2.png": "43f67ca25e820c9f3526ef0c04837e7d",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
