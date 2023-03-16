// EXTERNAL DEPS  =============================================================
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

// INTERNAL DEPS  =============================================================
import {
    Button,
    Element,
    FormWrapper,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    InputField,
} from "fictoan-react";

// LAYOUTS  ================================================================

// COMPONENTS  ================================================================
import { SignUpStyled } from "./SignUp.styled";

// UTILS  =====================================================================

// HOOKS  =====================================================================

// CONTEXTS  ==================================================================

// ASSETS  ====================================================================

// DATA  ======================================================================

// TYPES  =====================================================================

import { useToggle } from "@/hooks/useToggle";
import { useForm } from "react-hook-form";
import { PasswordModal } from "../PasswordModal/PasswordModal";
import { ImageGrid } from "../ImageGrid/ImageGrid";
import { useAuthStore } from "../../store/store";
import { APIURL } from "@/config/data";
import { Spinner } from "fictoan-react";
import { useCallback } from "react";
import { shuffleArr } from "@/utils";
import { toast } from "react-toastify";

const hts = [
    {
        id: 736877,
        pageURL:
            "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/",
        type: "photo",
        tags: "tree, cat, silhouette",
        previewURL:
            "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg",
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
            "https://pixabay.com/get/g6bb927f5dcf96fb8418fa3bf8a6575ed95e2fdcdf99a2d8e3893c3263c6dc341f9a14f77fcbe4bb2e7a2f2d931d6ca51_640.jpg",
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL:
            "https://pixabay.com/get/g284936357ee1827d633d81fc90c65b7661980eeeb6f1fb7540866aea1c9702274ae4cc4131c60e208187bcc1b41ebf9a9d3408006a02acaece7672509658409a_1280.jpg",
        imageWidth: 1920,
        imageHeight: 1282,
        imageSize: 97150,
        views: 1209208,
        downloads: 609359,
        collections: 2321,
        likes: 2815,
        comments: 565,
        user_id: 909086,
        user: "Bessi",
        userImageURL:
            "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg",
    },
    {
        id: 2083492,
        pageURL:
            "https://pixabay.com/photos/cat-young-animal-kitten-gray-cat-2083492/",
        type: "photo",
        tags: "cat, young animal, kitten",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_150.jpg",
        previewWidth: 150,
        previewHeight: 91,
        webformatURL:
            "https://pixabay.com/get/ge69ac019627fbf1b9cdc0706dabbbaa4440d13921cd2b7b2bfb93a47b140ef8760c75f6a159a878c6567fcf86419c7ef7a5b2eb9d37a36447182bd54bcb22e52_640.jpg",
        webformatWidth: 640,
        webformatHeight: 390,
        largeImageURL:
            "https://pixabay.com/get/g4e1c8f00fbce78c9e2e558f7118a58419569e58a8f68907583327de734a28a56f50ea7143c0e1da7436b5fb354fb327a1b0aecb8f480fc3bd182cb2889a9c6aa_1280.jpg",
        imageWidth: 4928,
        imageHeight: 3008,
        imageSize: 4130948,
        views: 1165707,
        downloads: 673447,
        collections: 2074,
        likes: 2310,
        comments: 376,
        user_id: 1777190,
        user: "susannp4",
        userImageURL:
            "https://cdn.pixabay.com/user/2015/12/16/17-56-55-832_250x250.jpg",
    },
    {
        id: 551554,
        pageURL:
            "https://pixabay.com/photos/cat-kitten-pet-kitty-young-cat-551554/",
        type: "photo",
        tags: "cat, kitten, pet",
        previewURL:
            "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg",
        previewWidth: 144,
        previewHeight: 150,
        webformatURL:
            "https://pixabay.com/get/g66d2be63ebf73bc5fd94a17b6e63e116bdb7b84c157d7d76b84c731980dbec2818112d9a7b6927fd3a5ffae2a951a80a_640.jpg",
        webformatWidth: 613,
        webformatHeight: 640,
        largeImageURL:
            "https://pixabay.com/get/gee4783ffa3f15df84b7a2c2f7b3cf07aab774b8d6d443da410de92bdae14c09aa4ee3771f00317605f87835ba94bab3067d3700a9bcd9192c1b52b34114c2819_1280.jpg",
        imageWidth: 2392,
        imageHeight: 2500,
        imageSize: 945751,
        views: 1226135,
        downloads: 646679,
        collections: 1687,
        likes: 2260,
        comments: 443,
        user_id: 617282,
        user: "Ty_Swartz",
        userImageURL:
            "https://cdn.pixabay.com/user/2014/11/30/13-45-12-52_250x250.jpg",
    },
    {
        id: 3012515,
        pageURL:
            "https://pixabay.com/photos/lion-roar-africa-animal-wildcat-3012515/",
        type: "photo",
        tags: "lion, roar, africa",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_150.jpg",
        previewWidth: 150,
        previewHeight: 95,
        webformatURL:
            "https://pixabay.com/get/gf5f67115e0770920d2569bad9d8536619c0491f7ba0753dcbc980502421c6d876e21e15c28530dc6e3222aeb7cddc424b452637068fb62aa3c925ffbd22f35e2_640.jpg",
        webformatWidth: 640,
        webformatHeight: 407,
        largeImageURL:
            "https://pixabay.com/get/geed3a354b699bca5ea74835887b0119537037b538c2375ed9d1d701839623ab6c98f06ed485b1020052c32cb389c6413b959372008029030118a16abf78d816e_1280.jpg",
        imageWidth: 3306,
        imageHeight: 2103,
        imageSize: 1869137,
        views: 911971,
        downloads: 579674,
        collections: 1619,
        likes: 2173,
        comments: 423,
        user_id: 1546275,
        user: "SarahRichterArt",
        userImageURL:
            "https://cdn.pixabay.com/user/2016/04/25/20-19-38-614_250x250.jpg",
    },
    {
        id: 3106213,
        pageURL:
            "https://pixabay.com/photos/nature-wildlife-white-bengal-tiger-3106213/",
        type: "photo",
        tags: "nature, wildlife, white bengal tiger",
        previewURL:
            "https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/g12bd030c3cd964bc4f43dbf41e4d68f24f158336ca2aed54bbe295bb6fd429800d530337f8496606155205144a3f095c4cc449b0740d630aa43e1a5ad417219d_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/g5e5433bd2dad03f4e6cf9b838a0ad1a6e838a9b713284819629425ea534fedea7a44c4babefaffb8500c67ac25cab3d06055c01b612686b303e205c4c261dc10_1280.jpg",
        imageWidth: 5472,
        imageHeight: 3648,
        imageSize: 4037947,
        views: 1469374,
        downloads: 919697,
        collections: 1724,
        likes: 2136,
        comments: 278,
        user_id: 1546275,
        user: "SarahRichterArt",
        userImageURL:
            "https://cdn.pixabay.com/user/2016/04/25/20-19-38-614_250x250.jpg",
    },
    {
        id: 2536662,
        pageURL:
            "https://pixabay.com/photos/cat-flower-kitten-stone-pet-2536662/",
        type: "photo",
        tags: "cat, flower, kitten",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/g75ae2db6f1424fc76aa964d8d1c9dfebac605b4212b13130df3d2908705ab30943759b2d57880ecbab9a229f45c6302c2fe24cfb933ea6117f66c6b81c5e7e45_640.jpg",
        webformatWidth: 640,
        webformatHeight: 425,
        largeImageURL:
            "https://pixabay.com/get/g766800a7685cc40dad6d5b212cce154b89a9ddd8ba88977a49b0e8d0532c4d9918ef5f1f6a0ed510d9d7e58041d484e0134dcffb3c9b0dca17eded0f85a46a00_1280.jpg",
        imageWidth: 4592,
        imageHeight: 3056,
        imageSize: 3178484,
        views: 865688,
        downloads: 518265,
        collections: 1521,
        likes: 1873,
        comments: 330,
        user_id: 5987327,
        user: "Dimhou",
        userImageURL:
            "https://cdn.pixabay.com/user/2021/03/13/05-49-15-380_250x250.jpeg",
    },
    {
        id: 1285634,
        pageURL:
            "https://pixabay.com/photos/cat-cat-s-eyes-blue-eyes-gray-cat-1285634/",
        type: "photo",
        tags: "cat, cat's eyes, blue eyes",
        previewURL:
            "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_150.png",
        previewWidth: 150,
        previewHeight: 94,
        webformatURL:
            "https://pixabay.com/get/gf2827711a1f80480d80e86cec72a95971a6686be0d370befb23217ed167ea77764a5daa616233827d90cbe934e77bce34c2970311d49e4e9c851916dffcc680a_640.png",
        webformatWidth: 640,
        webformatHeight: 402,
        largeImageURL:
            "https://pixabay.com/get/g5e9e3d89d256d0d8b82795b0abc3069a8d7af573f95a7de75f18d7999b3f22466c72e7983f277acc2d7e1cd61a21e99943d9112c5f657af8ba085c5ee2fc0c4f_1280.png",
        imageWidth: 3677,
        imageHeight: 2310,
        imageSize: 11720209,
        views: 932819,
        downloads: 469731,
        collections: 1637,
        likes: 1706,
        comments: 253,
        user_id: 127419,
        user: "cocoparisienne",
        userImageURL:
            "https://cdn.pixabay.com/user/2022/12/15/08-11-57-201_250x250.jpg",
    },
    {
        id: 2535888,
        pageURL:
            "https://pixabay.com/photos/tiger-swamp-big-cat-wild-cat-2535888/",
        type: "photo",
        tags: "tiger, swamp, big cat",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/ge4783dfd56b1b7c01a62d2a2c78f5b5414e9b606778d78bc6a22d539a4b45512daed3f842c69e7d7978b889588dfa46a42286f551d4c631a78dc0cfa8281effe_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/g1f0f0d041dca09a6c38b38abdecab2407f433245dd4827751a37f143f9873035edff598182558af5e9fb1136ba37c07e8017c6d6183abee34a74f57972282929_1280.jpg",
        imageWidth: 2813,
        imageHeight: 1875,
        imageSize: 2463393,
        views: 778261,
        downloads: 516271,
        collections: 1672,
        likes: 1678,
        comments: 209,
        user_id: 2748383,
        user: "andibreit",
        userImageURL:
            "https://cdn.pixabay.com/user/2016/06/19/12-23-14-902_250x250.jpg",
    },
    {
        id: 2888519,
        pageURL:
            "https://pixabay.com/photos/african-lion-wild-cat-feline-mane-2888519/",
        type: "photo",
        tags: "african lion, wild cat, feline",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_150.jpg",
        previewWidth: 150,
        previewHeight: 111,
        webformatURL:
            "https://pixabay.com/get/g0c3f5fab5a193b64cd8bde10c436d1a50abb86ab16b71ba7721d1247e8fb22190d285b22c238f21cba1b0213302032e1514003dae7c0c9b900eeb7b45df8e866_640.jpg",
        webformatWidth: 640,
        webformatHeight: 476,
        largeImageURL:
            "https://pixabay.com/get/g398527003b71a6c403f4b90c213cd76e18c653ff0f09241bed4d0940af84e9fce7a657e02681042389c27a74af40d56f003082fb99787986e6857c42b7025fa9_1280.jpg",
        imageWidth: 4862,
        imageHeight: 3620,
        imageSize: 4753777,
        views: 976345,
        downloads: 639788,
        collections: 1532,
        likes: 1654,
        comments: 236,
        user_id: 2026973,
        user: "IanZA",
        userImageURL:
            "https://cdn.pixabay.com/user/2017/09/27/13-12-29-269_250x250.jpg",
    },
    {
        id: 1045782,
        pageURL:
            "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1045782/",
        type: "photo",
        tags: "cat, animal, cat portrait",
        previewURL:
            "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_150.jpg",
        previewWidth: 150,
        previewHeight: 102,
        webformatURL:
            "https://pixabay.com/get/ge5533d7599a62f53825fbd24dac96405421d79c0c936994b66c556583f7179b5efd0de5f4cfbd5da2a5608edea12737339ae2e38f2fe8e1639e84ef39dad1e3a_640.jpg",
        webformatWidth: 640,
        webformatHeight: 437,
        largeImageURL:
            "https://pixabay.com/get/gb6cb8f2b2a316685e094dcd7c20ae4b952f915e3c41bc1798661ded8a40d6bc3ae93116ec67c77e1d5ecd2108b55875584b51a1cbff8dc45027e3575a8402aa6_1280.jpg",
        imageWidth: 2064,
        imageHeight: 1410,
        imageSize: 1268850,
        views: 652082,
        downloads: 375322,
        collections: 1437,
        likes: 1677,
        comments: 305,
        user_id: 127419,
        user: "cocoparisienne",
        userImageURL:
            "https://cdn.pixabay.com/user/2022/12/15/08-11-57-201_250x250.jpg",
    },
    {
        id: 591359,
        pageURL:
            "https://pixabay.com/photos/tigers-cub-snow-trees-forest-591359/",
        type: "photo",
        tags: "tigers, cub, snow",
        previewURL:
            "https://cdn.pixabay.com/photo/2015/01/07/11/31/tigers-591359_150.jpg",
        previewWidth: 150,
        previewHeight: 96,
        webformatURL:
            "https://pixabay.com/get/g9d1130525954a8845931814779f639ad2d65c247c87b10d77cf079dd4a42c6dc9b29fc66295c81a047b30dc3414abf42_640.jpg",
        webformatWidth: 640,
        webformatHeight: 412,
        largeImageURL:
            "https://pixabay.com/get/ge35a1583388225b16253b5c5dd053c8949dd5c250129c49c8bf407ff73f6995ba7fb98df5afbde0182dc6c0440f2589d71965b68818b08f103391cf3b4f5e6f2_1280.jpg",
        imageWidth: 4342,
        imageHeight: 2798,
        imageSize: 5424078,
        views: 490690,
        downloads: 274713,
        collections: 1390,
        likes: 1516,
        comments: 261,
        user_id: 443272,
        user: "Sponchia",
        userImageURL:
            "https://cdn.pixabay.com/user/2021/12/22/19-06-17-378_250x250.jpg",
    },
    {
        id: 577104,
        pageURL: "https://pixabay.com/photos/lions-couple-safari-pair-577104/",
        type: "photo",
        tags: "lions, couple, safari",
        previewURL:
            "https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104_150.jpg",
        previewWidth: 150,
        previewHeight: 100,
        webformatURL:
            "https://pixabay.com/get/gcb88f3231033c98475631eab7bb50e4b7b8969a02f7db2d1ff9b1dfc96551827d9c1be692da296371ddbba90facf830f_640.jpg",
        webformatWidth: 640,
        webformatHeight: 428,
        largeImageURL:
            "https://pixabay.com/get/g5a5deb3c384bac99434a142ddadafeb9da2888eaf170ed6404848ceb41c7282fa680a6f6e12fbd65d2da7303061ce43a897b095f37ab089e525f53535562d578_1280.jpg",
        imageWidth: 1982,
        imageHeight: 1327,
        imageSize: 569969,
        views: 783978,
        downloads: 396395,
        collections: 1287,
        likes: 1558,
        comments: 336,
        user_id: 443272,
        user: "Sponchia",
        userImageURL:
            "https://cdn.pixabay.com/user/2021/12/22/19-06-17-378_250x250.jpg",
    },
    {
        id: 694730,
        pageURL:
            "https://pixabay.com/photos/maine-coon-cat-cat-s-eyes-black-cat-694730/",
        type: "photo",
        tags: "maine coon, cat, cat's eyes",
        previewURL:
            "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/ge6ec2fcf1df7e7d27b01cfa6c22b3e779cf65131afffda63eb88fb6404bb29466df41544f9375853d954d94122c0fc40_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/g9a4d15197d0beac354d036f881b4d0fe3859c27ba304647cad7e38ccd13e4d8e30e8d49385b1f4bc4ae04141ad333056b0e08d3df743dd0a81c03767b1944add_1280.jpg",
        imageWidth: 3235,
        imageHeight: 2157,
        imageSize: 546452,
        views: 646941,
        downloads: 378183,
        collections: 1363,
        likes: 1575,
        comments: 224,
        user_id: 887962,
        user: "ClaudiaWollesen",
        userImageURL:
            "https://cdn.pixabay.com/user/2019/12/22/16-48-03-254_250x250.jpg",
    },
    {
        id: 323262,
        pageURL:
            "https://pixabay.com/photos/cat-pet-licking-animal-tabby-cat-323262/",
        type: "photo",
        tags: "cat, pet, licking",
        previewURL:
            "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/g59f16165cd762eeb41243261684c73bf8bbabad9382b5dfe0b611c4be5fb4e73700130768413a73f5194aa140f9d727e_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/g8e36d5ca3221178be00fc593446292dea09e0480c55beb1f3a9dee8941ee485ece412869ba84147ca75ad07a25d96cc19ad5f1d694c408cfb25d90c3976201ad_1280.jpg",
        imageWidth: 2557,
        imageHeight: 1704,
        imageSize: 668468,
        views: 751758,
        downloads: 362286,
        collections: 1255,
        likes: 1549,
        comments: 303,
        user_id: 222368,
        user: "TeamK",
        userImageURL:
            "https://cdn.pixabay.com/user/2020/11/21/08-20-58-568_250x250.jpg",
    },
    {
        id: 2934720,
        pageURL:
            "https://pixabay.com/photos/cat-kitten-pets-animals-housecat-2934720/",
        type: "photo",
        tags: "cat, kitten, pets",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/g40f11514d8790873d865d01b25f0f69eac8bef1523c85761d30fac7e12d735cd218ea6cef3594b78cbc295f69c388f8d6c9dede551d6ba612a087ff9748406c6_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/g0a8db4773483ee27e8da4c7df5ba864528c09f94d6fd91076c2fc4fe7313982ba8129a32ac82ab60f4d859dc2c0d8f94a4303646e82c5ca3416a13cb5170aac5_1280.jpg",
        imageWidth: 3495,
        imageHeight: 2330,
        imageSize: 1971228,
        views: 522837,
        downloads: 304624,
        collections: 1114,
        likes: 1290,
        comments: 230,
        user_id: 6995361,
        user: "Kirgiz03",
        userImageURL:
            "https://cdn.pixabay.com/user/2017/11/14/22-33-33-341_250x250.jpg",
    },
    {
        id: 114782,
        pageURL:
            "https://pixabay.com/photos/cat-pet-licking-animal-tabby-cat-114782/",
        type: "photo",
        tags: "cat, pet, licking",
        previewURL:
            "https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_150.jpg",
        previewWidth: 114,
        previewHeight: 150,
        webformatURL:
            "https://pixabay.com/get/g312aa322f4f6d5aa2cf945759751e0063192108dce0188de92136631d146ca5c24869f9fc2c6501a7bd3e4d2c393534a_640.jpg",
        webformatWidth: 489,
        webformatHeight: 640,
        largeImageURL:
            "https://pixabay.com/get/g2edef5842f6bb047e48c53e4cd4c3c47be5af3993422ab54fe3f8b14ada817db708575c90d9034449308fdb7af91e3c7536177d4af58fa385f2b9f4d543b46b8_1280.jpg",
        imageWidth: 2303,
        imageHeight: 3012,
        imageSize: 2261690,
        views: 491334,
        downloads: 277714,
        collections: 1176,
        likes: 1210,
        comments: 244,
        user_id: 5337,
        user: "ArtTower",
        userImageURL:
            "https://cdn.pixabay.com/user/2019/07/27/00-12-46-447_250x250.jpg",
    },
    {
        id: 1118467,
        pageURL:
            "https://pixabay.com/photos/lion-animal-head-face-mane-mammal-1118467/",
        type: "photo",
        tags: "lion, animal, head",
        previewURL:
            "https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/g1d2fa0b25477474d6d305e93af94ecd08065e89fca4d69a3cb217509e68f448fdab02d9f4764f8f9bb9efe313b59170b805fe947e78f67b06707edd7cf5cb7be_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/ge04eafa47e2d645bd5cac4315fda013ff52292d61d498dc67f6486d466fc62e6bd4040ba361189f25dac963b11ed3af2f11029fd423771dd6be7dfaa5fac1362_1280.jpg",
        imageWidth: 4252,
        imageHeight: 2835,
        imageSize: 3396326,
        views: 432162,
        downloads: 249789,
        collections: 1202,
        likes: 1116,
        comments: 153,
        user_id: 1798295,
        user: "WenPhotos",
        userImageURL:
            "https://cdn.pixabay.com/user/2016/01/12/16-44-55-409_250x250.jpg",
    },
    {
        id: 515509,
        pageURL:
            "https://pixabay.com/photos/leopard-animal-safari-mammal-515509/",
        type: "photo",
        tags: "leopard, animal, safari",
        previewURL:
            "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_150.jpg",
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
            "https://pixabay.com/get/ge27ddd4428dcb3610b5d2e836d78960c8b9f19db6d4b6c42d08b390a0c647730ba82f749466a8c1978d60def679abc3c_640.jpg",
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
            "https://pixabay.com/get/gc93b8cd3ff7ba0e6948a5ea8d45272b7a109356ca76c8d4d90084d6fbedb8bb61cabe5842d47b710786e1aa940ea8de9cfa2a8c4a8301940d06ec7fa02cc56d9_1280.jpg",
        imageWidth: 2304,
        imageHeight: 1536,
        imageSize: 944175,
        views: 293726,
        downloads: 160673,
        collections: 1220,
        likes: 1102,
        comments: 149,
        user_id: 554875,
        user: "designerpoint",
        userImageURL:
            "https://cdn.pixabay.com/user/2014/11/04/19-34-22-131_250x250.jpg",
    },
    {
        id: 2923186,
        pageURL:
            "https://pixabay.com/photos/tiger-head-face-feline-wild-cat-2923186/",
        type: "photo",
        tags: "tiger, head, face",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_150.jpg",
        previewWidth: 150,
        previewHeight: 143,
        webformatURL:
            "https://pixabay.com/get/g5e18d157e497b99d07f89deec7f45ee9517d007c10f7e7948d763f718eb5dc2bfc9e0cfd06c848183c57e4e7d0946e7027780c7290495ea80930b96efa6a7d02_640.jpg",
        webformatWidth: 640,
        webformatHeight: 613,
        largeImageURL:
            "https://pixabay.com/get/g589c9cbf78b836b3ec7e0bf6112d4ee3ee44cf10cba4115d4558307aa41f16504da74f498122aef8652c2c0aae03f11d2f932478586f906f704bd0bac6ee5dc5_1280.jpg",
        imageWidth: 4054,
        imageHeight: 3888,
        imageSize: 6056760,
        views: 504526,
        downloads: 356908,
        collections: 1173,
        likes: 1064,
        comments: 188,
        user_id: 201217,
        user: "blende12",
        userImageURL:
            "https://cdn.pixabay.com/user/2021/04/08/15-30-57-574_250x250.jpg",
    },
    {
        id: 2948404,
        pageURL:
            "https://pixabay.com/photos/kitty-playful-flowers-wildflowers-2948404/",
        type: "photo",
        tags: "kitty, playful, flowers",
        previewURL:
            "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_150.jpg",
        previewWidth: 150,
        previewHeight: 101,
        webformatURL:
            "https://pixabay.com/get/g81cf464dfb11a385249363f48d99352a6935d0b541a59cb628fb70d29b3a8cc4896c27c4f29236d7fe3622e4c0c06d71d0c2fd1a3f3f5aea68d9221399c027bc_640.jpg",
        webformatWidth: 640,
        webformatHeight: 433,
        largeImageURL:
            "https://pixabay.com/get/g6200239d31040b3c385ebcb168a89d56966e8913e9da19bf5ccbb64ee36f19f535bac563756d101a1d064a27057df23a0f2fa4013ee2d2d5096a480e64fac6bb_1280.jpg",
        imageWidth: 4056,
        imageHeight: 2746,
        imageSize: 3464997,
        views: 625458,
        downloads: 401594,
        collections: 873,
        likes: 1158,
        comments: 162,
        user_id: 3558510,
        user: "IlonaBurschl",
        userImageURL:
            "https://cdn.pixabay.com/user/2022/05/30/08-07-40-119_250x250.jpg",
    },
];

const SignUp = () => {
    const currentYear = new Date().getFullYear();
    const userName = useAuthStore((state) => state.userName);
    const setUserName = useAuthStore((state) => state.setUserName);
    const email = useAuthStore((state) => state.email);
    const setEmail = useAuthStore((state) => state.setEmail);
    const [isLoading, setIsLoading] = useState(false);

    console.log(email, "asd");
    const [signUpError, setSignUpError] = useState("");
    const [imageSet, setImageSet] = useState([]);

    const fetchData = useCallback(async () => {
        const { data } = await axios.get(
            `${APIURL}${encodeURIComponent("random")}&image_type=photo`
        );

        const allImages = hts.reduce((acc, curr) => {
            acc.push({ id: curr.id, imageURL: curr.webformatURL });
            return acc;
        }, []);

        // const allImages = data.hits.reduce((acc, curr) => {
        // 	acc.push({ id: curr.id, imageURL: curr.webformatURL });
        // 	return acc;
        // }, []);
        const reducedImages = shuffleArr(allImages);
        const totalImages = reducedImages.splice(0, 9);
        setImageSet(totalImages);
    }, []);

    // FETCH IMAGES
    useEffect(() => {
        fetchData();
    }, []);
    const checkUser = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post("/api/check-user", {
                username: userName,
                email: email,
            });

            if (response.status === 201) {
                setIsLoading(false);
                setIsSearchModalVisible(true);
            }
        } catch (error) {
            setIsLoading(false);
            setIsSearchModalVisible(false);
            toast.error(error?.response?.data.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser();
    };

    const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
    const postData = async () => {
        try {
            console.log(userName, email, "asffas");
            const res = await axios.post("/api/user", {
                username: userName,
                email: email,
            });

            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error(res.status);
            }
        } catch (error) {
            // setMessage("Failed to add pet");
        }
    };

    return (
        <SignUpStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.32 }}
        >
            <Head>
                <title>Sign in to Setu — Setu</title>
            </Head>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* LHS CONTENT */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="left-side-content" bgColour="slate-20">
                <Row
                    gutters="medium"
                    isFullHeight
                    isFullWidth
                    className="row-heading"
                >
                    <Portion className="img-container-text">
                        <Heading as="h1" textColor="white">
                            Taking Authentication to the next level
                        </Heading>
                        {/* <SetuLogo width={130} height={45} /> */}
                    </Portion>
                </Row>
            </Element>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* RHS FORM */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {isSearchModalVisible ? (
                <Row sidePadding="micro" paddingTop="small">
                    <Portion>
                        <Element as="div" className="grid-page">
                            {/* <Element
								as="div"
								isFullWidth
								verticallyCenterItems
								paddingLeft="nano"
								paddingRight="nano"
								marginBottom="micro"
							>
								<InputField
									type="text"
									placeholder="Type keyword to generate images eg: cat"
									onChange={(e) => setKeywordInput(e?.target?.value)}
								/>
								<Button kind="secondary" size="small" marginLeft="micro">
									Generate
								</Button>
							</Element> */}
                            {imageSet.length ? (
                                <ImageGrid
                                    showCategory={true}
                                    initialImageSet={imageSet}
                                    context="SIGNUP"
                                />
                            ) : (
                                <Spinner />
                            )}

                            <Element as="div" marginTop="nano">
                                <a
                                    onClick={() =>
                                        setIsSearchModalVisible(false)
                                    }
                                >
                                    {" "}
                                    Go back{" "}
                                </a>
                            </Element>
                        </Element>
                    </Portion>
                </Row>
            ) : (
                <Element as="section" id="right-side-content">
                    <Row sidePadding="micro" marginTop="small">
                        <Portion>
                            <Heading
                                as="h2"
                                marginBottom="tiny"
                                marginTop="medium"
                                data-testid="heading"
                                style={{ fontWeight: "700" }}
                            >
                                SignUp
                            </Heading>

                            <FormWrapper
                                spacing="none"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <InputField
                                    className="search-field"
                                    name="search"
                                    placeholder="Username"
                                    autoComplete="off"
                                    autoFocus
                                    required
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    value={userName}
                                    tabIndex={0}
                                />
                                <InputField
                                    className="search-field"
                                    name="search"
                                    placeholder="Email"
                                    autoComplete="off"
                                    autoFocus
                                    type="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    tabIndex={0}
                                />

                                {signUpError && (
                                    <Text
                                        marginBottom="micro"
                                        textColour="red"
                                        data-testid="signUp-error-text"
                                    >
                                        {signUpError}
                                    </Text>
                                )}
                                <Element
                                    as="div"
                                    className="button-group"
                                    marginTop="micro"
                                >
                                    <Button
                                        marginBottom="nano"
                                        kind="primary"
                                        shadow="hard"
                                        marginRight="micro"
                                        data-testid="signUp-button"
                                        isLoading={isLoading}
                                        type="submit"
                                    >
                                        Set Password
                                    </Button>

                                    <Element
                                        as="div"
                                        marginTop="nano"
                                        marginLeft="nano"
                                    >
                                        <Link href="/">Login -&gt;</Link>
                                    </Element>
                                </Element>
                            </FormWrapper>
                        </Portion>
                        {process.env.HIDE_SIGNUP && (
                            <Portion>
                                <HRule
                                    kind="secondary"
                                    marginTop="micro"
                                    marginBottom="micro"
                                />

                                <Text>
                                    New here?{" "}
                                    <Link href="/signup">
                                        Sign up for an account
                                    </Link>
                                    .
                                </Text>
                            </Portion>
                        )}
                    </Row>

                    <Row sidePadding="medium">
                        <Portion>
                            <Element as="footer">
                                <HRule
                                    kind="secondary"
                                    marginTop="micro"
                                    marginBottom="micro"
                                />

                                <Text isSubtext>
                                    &copy; {currentYear} Hushhush Technologies
                                </Text>
                            </Element>
                        </Portion>
                    </Row>
                </Element>
            )}
        </SignUpStyled>
    );
};

export default SignUp;
