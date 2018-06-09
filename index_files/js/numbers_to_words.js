//numberToEnglish.js - as JS script for including
/**
 * Convert an integer to its words representation
 * 
 * @author McShaman (http://stackoverflow.com/users/788657/mcshaman)
 * @source http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
 */
function numberToEnglish(n, and, space, chunk_delimiter) { //n - number string, then delimiters. And delimiter, space and chunk delimiter.

    var string = n.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    var and = and || 'and';
	var space = space || ' ';
	var chunk_delimiter = chunk_delimiter || '';


    /* Is number zero? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four',
	'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
	'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty',
	'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/* Array of scales as words */
scales = [
//scales from here: http://users.skynet.be/nizgorur/very_big_numbers.htm and there is a more scales.
//name, 10^N //(N only)
'',//0
'thousand',//3
'million',//6
'billion',//9
'trillion',//12
'quadrillion',//15
'quintillion',//18
'sextillion',//21
'septillion',//24
'octillion',//27
'nonillion',//30
'decillion',//33
'undecillion',//36
'duodecillion',//39
'tredecillion',//42
'quattuordecillion',//45
'quindecillion',//48
'sexdecillion',//51
'septendecillion',//54
'octodecillion',//57
'novemdecillion',//60
'vigintillion',//63
'unvigintillion',//66
'duovigintillion',//69
'trevigintillion',//72
'quattuorvigintillion',//75
'quinvigintillion',//78
'sexvigintillion',//81
'septenvigintillion',//84
'octovigintillion',//87
'novemvigintillion',//90
'trigintillion',//93
'untrigintillion',//96
'duotrigintillion',//99
'tretrigintillion',//102
'quattuortrigintillion',//105
'quintrigintillion',//108
'sextrigintillion',//111
'septentrigintillion',//114
'octotrigintillion',//117
'novemtrigintillion',//120
'quadragintillion',//123
'unquadragintillion',//126
'duoquadragintillion',//129
'trequadragintillion',//132
'quattuorquadragintillion',//135
'quinquadragintillion',//138
'sexquadragintillion',//141
'septenquadragintillion',//144
'octoquadragintillion',//147
'novemquadragintillion',//150
'quinquagintillion',//153
'unquinquagintillion',//156
'duoquinquagintillion',//159
'trequinquagintillion',//162
'quattuorquinquagintillion',//165
'quinquinquagintillion',//168
'sexquinquagintillion',//171
'septquinquagintillion',//174
'octoquinquagintillion',//177
'novemquinquagintillion',//180
'sexagintillion',//183
'unsexagintillion',//186
'duosexagintillion',//189
'tresexagintillion',//192
'quattuorsexagintillion',//195
'quinsexagintillion',//198
'sexsexagintillion',//201
'Septsexagintillion',//204
'octosexagintillion',//207
'mentaggoogol',//210
'septuagintillion',//213
'unseptuagintillion',//216
'duoseptuagintillion',//219
'treseptuagintillion',//222
'quattuorseptuagintillion',//225
'quinseptuagintillion',//228
'sexseptuagintillion',//231
'septseptuagintillion',//234
'octoseptuagintillion',//237
'novemseptuagintillion',//240
'octogintillion',//243
'unoctogintillion',//246
'duooctogintillion',//249
'treoctogintillion',//252
'quattuoroctogintillion',//255
'quinoctogintillion',//258
'sexoctogintillion',//261
'septenoctogintillion',//264
'octooctogintillion',//267
'novemoctogintillion',//270
'nonagintillion',//273
'unnonagintillion',//276
'duononagintillion',//279
'trenonagintillion',//282
'quattuornonagintillion',//285
'quinnonagintillion',//288
'sexnonagintillion',//291
'septnonagintillion',//294
'octononagintillion',//297
'novemnonagintillion',//300
'centillion',//303
'uncentillion',//306
'duocentillion',//309
'trecentillion',//312
'quattuorcentillion',//315
'quinquacentillion',//318
'sexcentillion',//321
'septencentillion',//324
'octocentillion',//327
'novencentillion',//330
'decicentillion',//333
'undecicentillion',//336
'duodecicentillion',//339
'tredecicentillion',//342
'quattuordecicentillion',//345
'quinquadecicentillion',//348
'centumsedecillion ',//351
'septendecicentillion',//354
'octodecicentillion',//357
'novendecicentillion',//360
'viginticentillion',//363
'unviginticentillion',//366
'duoviginticentillion',//369
'tresviginticentillion',//372
'quattuorviginticentillion',//375
'quinquaviginticentillion',//378
'sesviginticentillion',//381
'septemviginticentillion',//384
'octoviginticentillion',//387
'novemviginticentillion',//390
'trigintacentillion',//393
'untrigintacentillion',//396
'duotrigintacentillion',//399
'trestrigintacentillion',//402
'quattuortrigintacentillion',//405
'quinquatrigintacentillion',//408
'sestrigintacentillion',//411
'septentrigintacentillion',//414
'octotrigintacentillion',//417
'bentaggoogol',//420
'quadragintacentillion',//423
'unquadragintacentillion',//426
'duoquadragintacentillion',//429
'tresquadragintacentillion',//432
'quattuorquadragintacentillion',//435
'quinquaquadragintacentillion',//438
'sesquadragintacentillion',//441
'septenquadragintacentillion',//444
'octoquadragintacentillion',//447
'novenquadragintacentillion',//450
'quinquagintacentillion',//453
'unquinquagintacentillion',//456
'duoquinquagintacentillion',//459
'tresquinquagintacentillion',//462
'quattuorquinquagintacentillion',//465
'quinquaquinquagintacentillion',//468
'sesquinquagintacentillion',//471
'septenquinquagintacentillion',//474
'octoquinquagintacentillion',//477
'novenquinquagintacentillion',//480
'sexagintacentillion',//483
'unsexagintacentillion',//486
'duosexagintacentillion',//489
'tresexagintacentillion',//492
'quattuorsexagintacentillion',//495
'quinquasexagintacentillion',//498
'sesexagintacentillion',//501
'septensexagintacentillion',//504
'octosexagintacentillion',//507
'novensexagintacentillion',//510
'septuagintacentillion',//513
'unseptuagintacentillion',//516
'duoseptuagintacentillion',//519
'treseptuagintacentillion',//522
'quattuorseptuagintacentillion',//525
'quinquaseptuagintacentillion',//528
'seseptuagintacentillion',//531
'septenseptuagintacentillion',//534
'octoseptuagintacentillion',//537
'novenseptuagintacentillion',//540
'octogintacentillion',//543
'unoctogintacentillion',//546
'duooctogintacentillion',//549
'tresoctogintacentillion',//552
'quattuoroctogintacentillion',//555
'quinquaoctogintacentillion',//558
'sexoctogintacentillion',//561
'septemoctogintacentillion',//564
'octooctogintacentillion',//567
'novemoctogintacentillion',//570
'nonagintacentillion',//573
'unnonagintacentillion',//576
'duononagintacentillion',//579
'trenonagintacentillion',//582
'quattuornonagintacentillion',//585
'quinquanonagintacentillion',//588
'senonagintacentillion',//591
'septenonagintacentillion',//594
'octononagintacentillion',//597
'undeducentillion',//600
'ducentillion',//603
'unducentillion',//606
'duoducentillion',//609
'treducentillion',//612
'quattuorducentillion',//615
'quinquaducentillion',//618
'seducentillion',//621
'septenducentillion',//624
'octoducentillion',//627
'tentaggoogol',//630
'deciducentillion',//633
'undeciducentillion',//636
'duodeciducentillion',//639
'tredeciducentillion',//642
'quattuordeciducentillion',//645
'quinquadeciducentillion',//648
'sedeciducentillion',//651
'septendeciducentillion',//654
'octodeciducentillion',//657
'novendeciducentillion',//660
'vigintiducentillion',//663
'unvigintiducentillion',//666
'duovigintiducentillion',//669
'tresvigintiducentillion',//672
'quattuorvigintiducentillion',//675
'quinquavigintiducentillion',//678
'sesvigintiducentillion',//681
'septemvigintiducentillion',//684
'octovigintiducentillion',//687
'novemvigintiducentillion',//690
'trigintaducentillion',//693
'untrigintaducentillion',//696
'duotrigintaducentillion',//699
'trestrigintaducentillion',//702
'quattuortrigintaducentillion',//705
'quinquatrigintaducentillion',//708
'sestrigintaducentillion',//711
'septentrigintaducentillion',//714
'octotrigintaducentillion',//717
'noventrigintaducentillion',//720
'quadragintaducentillion',//723
'unquadragintaducentillion',//726
'duoquadragintaducentillion',//729
'tresquadragintaducentillion',//732
'quattuorquadragintaducentillion',//735
'quinquaquadragintaducentillion',//738
'sesquadragintaducentillion',//741
'septenquadragintaducentillion',//744
'octoquadragintaducentillion',//747
'novenquadragintaducentillion',//750
'quinquagintaducentillion',//753
'unquinquagintaducentillion',//756
'duoquinquagintaducentillion',//759
'tresquinquagintaducentillion',//762
'quattuorquinquagintaducentillion',//765
'quinquaquinquagintaducentillion',//768
'sesquinquagintaducentillion',//771
'septenquinquagintaducentillion',//774
'octoquinquagintaducentillion',//777
'novenquinquagintaducentillion',//780
'sexagintaducentillion',//783
'unsexagintaducentillion',//786
'duosexagintaducentillion',//789
'tresexagintaducentillion',//792
'quattuorsexagintaducentillion',//795
'quinquasexagintaducentillion',//798
'sesexagintaducentillion',//801
'septensexagintaducentillion',//804
'octosexagintaducentillion',//807
'novensexagintaducentillion',//810
'septuagintaducentillion',//813
'unseptuagintaducentillion',//816
'duoseptuagintaducentillion',//819
'treseptuagintaducentillion',//822
'quattuorseptuagintaducentillion',//825
'quinquaseptuagintaducentillion',//828
'seseptuagintaducentillion',//831
'septenseptuagintaducentillion',//834
'octoseptuagintaducentillion',//837
'novenseptuagintaducentillion',//840
'octogintaducentillion',//843
'unoctogintaducentillion',//846
'duooctogintaducentillion',//849
'tresoctogintaducentillion',//852
'quattuoroctogintaducentillion',//855
'quinquaoctogintaducentillion',//858
'sexoctogintaducentillion',//861
'septemoctogintaducentillion',//864
'octooctogintaducentillion',//867
'novemoctogintaducentillion',//870
'nonagintaducentillion',//873
'unnonagintaducentillion',//876
'duononagintaducentillion',//879
'trenonagintaducentillion',//882
'quattuornonagintaducentillion',//885
'quinquanonagintaducentillion',//888
'senonagintaducentillion',//891
'septenonagintaducentillion',//894
'octononagintaducentillion',//897
'Novenonagintaducentillion',//900
'Trecentillion',//903
'untrecentillion',//906
'duotrecentillion',//909
'trestrecentillion',//912
'quattuortrecentillion',//915
'quinquatrecentillion',//918
'sestrecentillion',//921
'septentrecentillion',//924
'octotrecentillion',//927
'noventrecentillion',//930
'decitrecentillion',//933
'undecitrecentillion',//936
'duodecitrecentillion',//939
'tredecitrecentillion',//942
'quattuordecitrecentillion',//945
'quinquadecitrecentillion',//948
'sedecitrecentillion',//951
'septendecitrecentillion',//954
'octodecitrecentillion',//957
'novendecitrecentillion',//960
'vigintitrecentillion',//963
'unvigintitrecentillion',//966
'duovigintitrecentillion',//969
'tresvigintitrecentillion',//972
'quattuorvigintitrecentillion',//975
'quinquavigintitrecentillion',//978
'sesvigintitrecentillion',//981
'septemvigintitrecentillion',//984
'octovigintitrecentillion',//987
'novemvigintitrecentillion',//990
'trigintatrecentillion',//993
'untrigintatrecentillion',//996
'duotrigintatrecentillion',//999
'trestrigintatrecentillion',//1002
'quattuortrigintatrecentillion',//1005
'quinquatrigintatrecentillion',//1008
'sestrigintatrecentillion',//1011
'septentrigintatrecentillion',//1014
'1octotrigintatrecentillion',//1017
'noventrigintatrecentillion',//1020
'quadragintatrecentillion',//1023
'unquadragintatrecentillion',//1026
'duoquadragintatrecentillion',//1029
'tresquadragintatrecentillion',//1032
'quattuorquadragintatrecentillion',//1035
'quinquaquadragintatrecentillion',//1038
'sesquadragintatrecentillion',//1041
'septenquadragintatrecentillion',//1044
'octoquadragintatrecentillion',//1047
'novenquadragintatrecentillion',//1050
'quinquagintatrecentillion',//1053
'unquinquagintatrecentillion',//1056
'duoquinquagintatrecentillion',//1059
'tresquinquagintatrecentillion',//1062
'quattuorquinquagintatrecentillion',//1065
'quinquaquinquagintatrecentillion',//1068
'sesquinquagintatrecentillion',//1071
'septenquinquagintatrecentillion',//1074
'octoquinquagintatrecentillion',//1077
'novenquinquagintatrecentillion',//1080
'sexagintatrecentillion',//1083
'unsexagintatrecentillion',//1086
'duosexagintatrecentillion',//1089
'tresexagintatrecentillion',//1092
'quattuorsexagintatrecentillion',//1095
'quinquasexagintatrecentillion',//1098
'sesexagintatrecentillion',//1101
'septensexagintatrecentillion',//1104
'octosexagintatrecentillion',//1107
'novensexagintatrecentillion',//1110
'septuagintatrecentillion',//1113
'unseptuagintatrecentillion',//1116
'duoseptuagintatrecentillion',//1119
'treseptuagintatrecentillion',//1122
'quattuorseptuagintatrecentillion',//1125
'quinquaseptuagintatrecentillion',//1128
'seseptuagintatrecentillion',//1131
'septenseptuagintatrecentillion',//1134
'octoseptuagintatrecentillion',//1137
'novenseptuagintatrecentillion',//1140
'octogintatrecentillion',//1143
'unoctogintatrecentillion',//1146
'duooctogintatrecentillion',//1149
'tresoctogintatrecentillion',//1152
'quattuoroctogintatrecentillion',//1155
'quinquaoctogintatrecentillion',//1158
'sexoctogintatrecentillion',//1161
'septemoctogintatrecentillion',//1164
'octooctogintatrecentillion',//1167
'novemoctogintatrecentillion',//1170
'nonagintatrecentillion',//1173
'unnonagintatrecentillion',//1176
'duononagintatrecentillion',//1179
'trenonagintatrecentillion',//1182
'quattuornonagintatrecentillion',//1185
'quinquanonagintatrecentillion',//1188
'senonagintatrecentillion',//1191
'septenonagintatrecentillion',//1194
'octononagintatrecentillion',//1197
'novenonagintatrecentillion',//1200
'Quadringentillion',//1203
'unquadringentillion',//1206
'duoquadringentillion',//1209
'tresquadringentillion',//1212
'quattuorquadringentillion',//1215
'quinquaquadringentillion',//1218
'sesquadringentillion',//1221
'septenquadringentillion',//1224
'octoquadringentillion',//1227
'novenquadringentillion',//1230
'deciquadringentillion',//1233
'undeciquadringentillion',//1236
'duodeciquadringentillion',//1239
'tredeciquadringentillion',//1242
'quattuordeciquadringentillion',//1245
'quinquadeciquadringentillion',//1248
'sedeciquadringentillion',//1251
'septendeciquadringentillion',//1254
'octodeciquadringentillion',//1257
'novendeciquadringentillion',//1260
'vigintiquadringentillion',//1263
'unvigintiquadringentillion',//1266
'duovigintiquadringentillion',//1269
'tresvigintiquadringentillion',//1272
'quattuorvigintiquadringentillion',//1275
'quinquavigintiquadringentillion',//1278
'sesvigintiquadringentillion',//1281
'septemvigintiquadringentillion',//1284
'octovigintiquadringentillion',//1287
'novemvigintiquadringentillion',//1290
'trigintaquadringentillion',//1293
'untrigintaquadringentillion',//1296
'duotrigintaquadringentillion',//1299
'trestrigintaquadringentillion',//1302
'quattuortrigintaquadringentillion',//1305
'quinquatrigintaquadringentillion',//1308
'sestrigintaquadringentillion',//1311
'septentrigintaquadringentillion',//1314
'octotrigintaquadringentillion',//1317
'noventrigintaquadringentillion',//1320
'quadragintaquadringentillion',//1323
'unquadragintaquadringentillion',//1326
'duoquadragintaquadringentillion',//1329
'tresquadragintaquadringentillion',//1332
'quattuorquadragintaquadringentillion',//1335
'quinquaquadragintaquadringentillion',//1338
'sesquadragintaquadringentillion',//1341
'septenquadragintaquadringentillion',//1344
'octoquadragintaquadringentillion',//1347
'novenquadragintaquadringentillion',//1350
'quinquagintaquadringentillion',//1353
'unquinquagintaquadringentillion',//1356
'duoquinquagintaquadringentillion',//1359
'tresquinquagintaquadringentillion',//1362
'quattuorquinquagintaquadringentillion',//1365
'quinquaquinquagintaquadringentillion',//1368
'sesquinquagintaquadringentillion',//1371
'septenquinquagintaquadringentillion',//1374
'octoquinquagintaquadringentillion',//1377
'novenquinquagintaquadringentillion',//1380
'sexagintaquadringentillion',//1383
'unsexagintaquadringentillion',//1386
'duosexagintaquadringentillion',//1389
'tresexagintaquadringentillion',//1392
'quattuorsexagintaquadringentillion',//1395
'quinquasexagintaquadringentillion',//1398
'sesexagintaquadringentillion',//1401
'septensexagintaquadringentillion',//1404
'octosexagintaquadringentillion',//1407
'novensexagintaquadringentillion',//1410
'septuagintaquadringentillion',//1413
'unseptuagintaquadringentillion',//1416
'duoseptuagintaquadringentillion',//1419
'treseptuagintaquadringentillion',//1422
'quattuorseptuagintaquadringentillion',//1425
'quinquaseptuagintaquadringentillion',//1428
'seseptuagintaquadringentillion',//1431
'septenseptuagintaquadringentillion',//1434
'octoseptuagintaquadringentillion',//1437
'novenseptuagintaquadringentillion',//1440
'octogintaquadringentillion',//1443
'unoctogintaquadringentillion',//1446
'duooctogintaquadringentillion',//1449
'tresoctogintaquadringentillion',//1452
'quattuoroctogintaquadringentillion',//1455
'quinquaoctogintaquadringentillion',//1458
'sexoctogintaquadringentillion',//1461
'septemoctogintaquadringentillion',//1464
'octooctogintaquadringentillion',//1467
'novemoctogintaquadringentillion',//1470
'nonagintaquadringentillion',//1473
'unnonagintaquadringentillion',//1476
'duononagintaquadringentillion',//1479
'trenonagintaquadringentillion',//1482
'quattuornonagintaquadringentillion',//1485
'quinquanonagintaquadringentillion',//1488
'senonagintaquadringentillion',//1491
'septenonagintaquadringentillion',//1494
'octononagintaquadringentillion',//1497
'novenonagintaquadringentillion',//1500
'Quingentillion',//1503
'unquingentillion',//1506
'duoquingentillion',//1509
'tresquingentillion',//1512
'quattuorquingentillion',//1515
'quinquaquingentillion',//1518
'sesquingentillion',//1521
'septenquingentillion',//1524
'octoquingentillion',//1527
'novenquingentillion',//1530
'deciquingentillion',//1533
'undeciquingentillion',//1536
'duodeciquingentillion',//1539
'tredeciquingentillion',//1542
'quattuordeciquingentillion',//1545
'quinquadeciquingentillion',//1548
'sedeciquingentillion',//1551
'septendeciquingentillion',//1554
'octodeciquingentillion',//1557
'novendeciquingentillion',//1560
'vigintiquingentillion',//1563
'unvigintiquingentillion',//1566
'duovigintiquingentillion',//1569
'tresvigintiquingentillion',//1572
'quattuorvigintiquingentillion',//1575
'quinquavigintiquingentillion',//1578
'sesvigintiquingentillion',//1581
'septemvigintiquingentillion',//1584
'octovigintiquingentillion',//1587
'novemvigintiquingentillion',//1590
'trigintaquingentillion',//1593
'untrigintaquingentillion',//1596
'duotrigintaquingentillion',//1599
'trestrigintaquingentillion',//1602
'quattuortrigintaquingentillion',//1605
'quinquatrigintaquingentillion',//1608
'sestrigintaquingentillion',//1611
'septentrigintaquingentillion',//1614
'octotrigintaquingentillion',//1617
'noventrigintaquingentillion',//1620
'quadragintaquingentillion',//1623
'unquadragintaquingentillion',//1626
'duoquadragintaquingentillion',//1629
'tresquadragintaquingentillion',//1632
'quattuorquadragintaquingentillion',//1635
'quinquaquadragintaquingentillion',//1638
'sesquadragintaquingentillion',//1641
'septenquadragintaquingentillion',//1644
'octoquadragintaquingentillion',//1647
'novenquadragintaquingentillion',//1650
'quinquagintaquingentillion',//1653
'Uunquinquagintaquingentillion',//1656
'duoquinquagintaquingentillion',//1659
'tresquinquagintaquingentillion',//1662
'quattuorquinquagintaquingentillion',//1665
'quinquaquinquagintaquingentillion',//1668
'sesquinquagintaquingentillion',//1671
'septenquinquagintaquingentillion',//1674
'octoquinquagintaquingentillion',//1677
'novenquinquagintaquingentillion',//1680
'sexagintaquingentillion',//1683
'unsexagintaquingentillion',//1686
'duosexagintaquingentillion',//1689
'tresexagintaquingentillion',//1692
'quattuorsexagintaquingentillion',//1695
'quinquasexagintaquingentillion',//1698
'sesexagintaquingentillion',//1701
'septensexagintaquingentillion',//1704
'octosexagintaquingentillion',//1707
'novensexagintaquingentillion',//1710
'septuagintaquingentillion',//1713
'unseptuagintaquingentillion',//1716
'duoseptuagintaquingentillion',//1719
'treseptuagintaquingentillion',//1722
'quattuorseptuagintaquingentillion',//1725
'quinquaseptuagintaquingentillion',//1728
'seseptuagintaquingentillion',//1731
'septenseptuagintaquingentillion',//1734
'octoseptuagintaquingentillion',//1737
'novenseptuagintaquingentillion',//1740
'octogintaquingentillion',//1743
'unoctogintaquingentillion',//1746
'duooctogintaquingentillion',//1749
'tresoctogintaquingentillion',//1752
'quattuoroctogintaquingentillion',//1755
'quinquaoctogintaquingentillion',//1758
'sexoctogintaquingentillion',//1761
'septemoctogintaquingentillion',//1764
'octooctogintaquingentillion',//1767
'novemoctogintaquingentillion',//1770
'nonagintaquingentillion',//1773
'unnonagintaquingentillion',//1776
'duononagintaquingentillion',//1779
'trenonagintaquingentillion',//1782
'quattuornonagintaquingentillion',//1785
'quinquanonagintaquingentillion',//1788
'senonagintaquingentillion',//1791
'septenonagintaquingentillion',//1794
'octononagintaquingentillion',//1797
'novenonagintaquingentillion',//1800
'sescentillion',//1803
'unsescentillion',//1806
'duosescentillion',//1809
'tresescentillion',//1812
'quattuorsescentillion',//1815
'quinquasescentillion',//1818
'sesescentillion',//1821
'septensescentillion',//1824
'octosescentillion',//1827
'novensescentillion',//1830
'decisescentillion',//1833
'undecisescentillion',//1836
'duodecisescentillion',//1839
'tredecisescentillion',//1842
'quattuordecisescentillion',//1845
'quinquadecisescentillion',//1848
'sedecisescentillion',//1851
'septendecisescentillion',//1854
'octodecisescentillion',//1857
'novendecisescentillion',//1860
'vigintisescentillion',//1863
'unvigintisescentillion',//1866
'duovigintisescentillion',//1869
'tresvigintisescentillion',//1872
'quattuorvigintisescentillion',//1875
'quinquavigintisescentillion',//1878
'sesvigintisescentillion',//1881
'septemvigintisescentillion',//1884
'octovigintisescentillion',//1887
'novemvigintisescentillion',//1890
'trigintasescentillion',//1893
'untrigintasescentillion',//1896
'duotrigintasescentillion',//1899
'trestrigintasescentillion',//1902
'quattuortrigintasescentillion',//1905
'quinquatrigintasescentillion',//1908
'sestrigintasescentillion',//1911
'septentrigintasescentillion',//1914
'octotrigintasescentillion',//1917
'noventrigintasescentillion',//1920
'quadragintasescentillion',//1923
'unquadragintasescentillion',//1926
'duoquadragintasescentillion',//1929
'tresquadragintasescentillion',//1932
'quattuorquadragintasescentillion',//1935
'quinquaquadragintasescentillion',//1938
'sesquadragintasescentillion',//1941
'septenquadragintasescentillion',//1944
'octoquadragintasescentillion',//1947
'novenquadragintasescentillion',//1950
'quinquagintasescentillion',//1953
'unquinquagintasescentillion',//1956
'duoquinquagintasescentillion',//1959
'tresquinquagintasescentillion',//1962
'quattuorquinquagintasescentillion',//1965
'quinquaquinquagintasescentillion',//1968
'sesquinquagintasescentillion',//1971
'septenquinquagintasescentillion',//1974
'octoquinquagintasescentillion',//1977
'novenquinquagintasescentillion',//1980
'sexagintasescentillion',//1983
'unsexagintasescentillion',//1986
'duosexagintasescentillion',//1989
'tresexagintasescentillion',//1992
'quattuorsexagintasescentillion',//1995
'quinquasexagintasescentillion',//1998
'sesexagintasescentillion',//2001
'septensexagintasescentillion',//2004
'octosexagintasescentillion',//2007
'novensexagintasescentillion',//2010
'septuagintasescentillion',//2013
'unseptuagintasescentillion',//2016
'duoseptuagintasescentillion',//2019
'treseptuagintasescentillion',//2022
'quattuorseptuagintasescentillion',//2025
'quinquaseptuagintasescentillion',//2028
'seseptuagintasescentillion',//2031
'septenseptuagintasescentillion',//2034
'octoseptuagintasescentillion',//2037
'novenseptuagintasescentillion',//2040
'octogintasescentillion',//2043
'unoctogintasescentillion',//2046
'duooctogintasescentillion',//2049
'tresoctogintasescentillion',//2052
'quattuoroctogintasescentillion',//2055
'quinquaoctogintasescentillion',//2058
'sexoctogintasescentillion',//2061
'septemoctogintasescentillion',//2064
'octooctogintasescentillion',//2067
'novemoctogintasescentillion',//2070
'nonagintasescentillion',//2073
'unnonagintasescentillion',//2076
'duononagintasescentillion',//2079
'trenonagintasescentillion',//2082
'quattuornonagintasescentillion',//2085
'quinquanonagintasescentillion',//2088
'senonagintasescentillion',//2091
'septenonagintasescentillion',//2094
'octononagintasescentillion',//2097
'novenonagintasescentillion',//2100
'Septingentillion',//2103
'unseptingentillion',//2106
'duoseptingentillion',//2109
'treseptingentillion',//2112
'quattuorseptingentillion',//2115
'quinquaseptingentillion',//2118
'seseptingentillion',//2121
'septenseptingentillion',//2124
'octoseptingentillion',//2127
'novenseptingentillion',//2130
'deciseptingentillion',//2133
'undeciseptingentillion',//2136
'duodeciseptingentillion',//2139
'tredeciseptingentillion',//2142
'quattuordeciseptingentillion',//2145
'quinquadeciseptingentillion',//2148
'sedeciseptingentillion',//2151
'septendeciseptingentillion',//2154
'octodeciseptingentillion',//2157
'novendeciseptingentillion',//2160
'vigintiseptingentillion',//2163
'unvigintiseptingentillion',//2166
'duovigintiseptingentillion',//2169
'tresvigintiseptingentillion',//2172
'quattuorvigintiseptingentillion',//2175
'quinquavigintiseptingentillion',//2178
'sesvigintiseptingentillion',//2181
'septemvigintiseptingentillion',//2184
'octovigintiseptingentillion',//2187
'novemvigintiseptingentillion',//2190
'trigintaseptingentillion',//2193
'untrigintaseptingentillion',//2196
'duotrigintaseptingentillion',//2199
'trestrigintaseptingentillion',//2202
'quattuortrigintaseptingentillion',//2205
'quinquatrigintaseptingentillion',//2208
'sestrigintaseptingentillion',//2211
'septentrigintaseptingentillion',//2214
'octotrigintaseptingentillion',//2217
'noventrigintaseptingentillion',//2220
'quadragintaseptingentillion',//2223
'unquadragintaseptingentillion',//2226
'septingentiquadragintabillion',//2229
'tresquadragintaseptingentillion',//2232
'quattuorquadragintaseptingentillion',//2235
'quinquaquadragintaseptingentillion',//2238
'sesquadragintaseptingentillion',//2241
'septenquadragintaseptingentillion',//2244
'octoquadragintaseptingentillion',//2247
'novenquadragintaseptingentillion',//2250
'quinquagintaseptingentillion',//2253
'unquinquagintaseptingentillion',//2256
'duoquinquagintaseptingentillion',//2259
'tresquinquagintaseptingentillion',//2262
'quattuorquinquagintaseptingentillion',//2265
'quinquaquinquagintaseptingentillion',//2268
'sesquinquagintaseptingentillion',//2271
'septenquinquagintaseptingentillion',//2274
'octoquinquagintaseptingentillion',//2277
'novenquinquagintaseptingentillion',//2280
'sexagintaseptingentillion',//2283
'unsexagintaseptingentillion',//2286
'duosexagintaseptingentillion',//2289
'tresexagintaseptingentillion',//2292
'quattuorsexagintaseptingentillion',//2295
'quinquasexagintaseptingentillion',//2298
'sesexagintaseptingentillion',//2301
'septensexagintaseptingentillion',//2304
'octosexagintaseptingentillion',//2307
'novensexagintaseptingentillion',//2310
'septuagintaseptingentillion',//2313
'unseptuagintaseptingentillion',//2316
'duoseptuagintaseptingentillion',//2319
'treseptuagintaseptingentillion',//2322
'quattuorseptuagintaseptingentillion',//2325
'quinquaseptuagintaseptingentillion',//2328
'seseptuagintaseptingentillion',//2331
'septenseptuagintaseptingentillion',//2334
'octoseptuagintaseptingentillion',//2337
'novenseptuagintaseptingentillion',//2340
'octogintaseptingentillion',//2343
'unoctogintaseptingentillion',//2346
'duooctogintaseptingentillion',//2349
'tresoctogintaseptingentillion',//2352
'quattuoroctogintaseptingentillion',//2355
'quinquaoctogintaseptingentillion',//2358
'sexoctogintaseptingentillion',//2361
'septemoctogintaseptingentillion',//2364
'octooctogintaseptingentillion',//2367
'novemoctogintaseptingentillion',//2370
'nonagintaseptingentillion',//2373
'unnonagintaseptingentillion',//2376
'duononagintaseptingentillion',//2379
'trenonagintaseptingentillion',//2382
'quattuornonagintaseptingentillion',//2385
'quinquanonagintaseptingentillion',//2388
'senonagintaseptingentillion',//2391
'septenonagintaseptingentillion',//2394
'octononagintaseptingentillion',//2397
'novenonagintaseptingentillion',//2400
'Octingentillion',//2403
'unoctingentillion',//2406
'duooctingentillion',//2409
'tresoctingentillion',//2412
'quattuoroctingentillion',//2415
'quinquaoctingentillion',//2418
'Sexoctingentillion',//2421
'septemoctingentillion',//2424
'octooctingentillion',//2427
'novemoctingentillion',//2430
'decioctingentillion',//2433
'undecioctingentillion',//2436
'duodecioctingentillion',//2439
'tredecioctingentillion',//2442
'quattuordecioctingentillion',//2445
'quinquadecioctingentillions',//2448
'sedecioctingentillion',//2451
'septendecioctingentillion',//2454
'octodecioctingentillion',//2457
'novendecioctingentillion',//2460
'vigintioctingentillion',//2463
'unvigintioctingentillion',//2466
'duovigintioctingentillion',//2469
'tresvigintioctingentillion',//2472
'quattuorvigintioctingentillion',//2475
'quinquavigintioctingentillion',//2478
'sesvigintioctingentillion',//2481
'septemvigintioctingentillion',//2484
'octovigintioctingentillion',//2487
'novemvigintioctingentillion',//2490
'trigintaoctingentillion',//2493
'untrigintaoctingentillion',//2496
'duotrigintaoctingentillion',//2499
'trestrigintaoctingentillion',//2502
'quattuortrigintaoctingentillion',//2505
'quinquatrigintaoctingentillion',//2508
'sestrigintaoctingentillion',//2511
'septentrigintaoctingentillion',//2514
'octotrigintaoctingentillion',//2517
'noventrigintaoctingentillion',//2520
'quadragintaoctingentillion',//2523
'unquadragintaoctingentillion',//2526
'duoquadragintaoctingentillion',//2529
'tresquadragintaoctingentillion',//2532
'quattuorquadragintaoctingentillion',//2535
'quinquaquadragintaoctingentillion',//2538
'sesquadragintaoctingentillion',//2541
'septenquadragintaoctingentillion',//2544
'octoquadragintaoctingentillion',//2547
'novenquadragintaoctingentillion',//2550
'quinquagintaoctingentillion',//2553
'unquinquagintaoctingentillion',//2556
'duoquinquagintaoctingentillion',//2559
'tresquinquagintaoctingentillion',//2562
'quattuorquinquagintaoctingentillion',//2565
'quinquaquinquagintaoctingentillion',//2568
'sesquinquagintaoctingentillion',//2571
'septenquinquagintaoctingentillion',//2574
'octoquinquagintaoctingentillion',//2577
'novenquinquagintaoctingentillion',//2580
'sexagintaoctingentillion',//2583
'unsexagintaoctingentillion',//2586
'duosexagintaoctingentillion',//2589
'tresexagintaoctingentillion',//2592
'quattuorsexagintaoctingentillion',//2595
'quinquasexagintaoctingentillion',//2598
'sesexagintaoctingentillion',//2601
'septensexagintaoctingentillion',//2604
'octosexagintaoctingentillion',//2607
'novensexagintaoctingentillion',//2610
'septuagintaoctingentillion',//2613
'unseptuagintaoctingentillion',//2616
'duoseptuagintaoctingentillion',//2619
'treseptuagintaoctingentillion',//2622
'quattuorseptuagintaoctingentillion',//2625
'quinquaseptuagintaoctingentillion',//2628
'seseptuagintaoctingentillion',//2631
'septenseptuagintaoctingentillion',//2634
'octoseptuagintaoctingentillion',//2637
'novenseptuagintaoctingentillion',//2640
'octogintaoctingentillion',//2643
'unoctogintaoctingentillion',//2646
'duooctogintaoctingentillion',//2649
'tresoctogintaoctingentillion',//2652
'quattuoroctogintaoctingentillion',//2655
'quinquaoctogintaoctingentillion',//2658
'sexoctogintaoctingentillion',//2661
'septemoctogintaoctingentillion',//2664
'octooctogintaoctingentillion',//2667
'novemoctogintaoctingentillion',//2670
'nonagintaoctingentillion',//2673
'unnonagintaoctingentillion',//2676
'duononagintaoctingentillion',//2679
'trenonagintaoctingentillion',//2682
'quattuornonagintaoctingentillion',//2685
'quinquanonagintaoctingentillion',//2688
'senonagintaoctingentillion',//2691
'septenonagintaoctingentillion',//2694
'octononagintaoctingentillion',//2697
'novenonagintaoctingentillion',//2700
'Nongentillion',//2703
'unnongentillion',//2706
'duonongentillion',//2709
'trenongentillion',//2712
'quattuornongentillion',//2715
'quinquanongentillion',//2718
'senongentillion',//2721
'septenongentillion',//2724
'octonongentillion',//2727
'novenongentillion',//2730
'decinongentillion',//2733
'undecinongentillion',//2736
'duodecinongentillion',//2739
'tredecinongentillion',//2742
'quattuordecinongentillion',//2745
'quinquadecinongentillion',//2748
'sedecinongentillion',//2751
'septendecinongentillion',//2754
'octodecinongentillion',//2757
'novendecinongentillion',//2760
'vigintinongentillion',//2763
'unvigintinongentillion',//2766
'duovigintinongentillion',//2769
'tresvigintinongentillion',//2772
'quattuorvigintinongentillion',//2775
'quinquavigintinongentillion',//2778
'sesvigintinongentillion',//2781
'septemvigintinongentillion',//2784
'octovigintinongentillion',//2787
'novemvigintinongentillion',//2790
'trigintanongentillion',//2793
'untrigintanongentillion',//2796
'duotrigintanongentillion',//2799
'trestrigintanongentillion',//2802
'quattuortrigintanongentillion',//2805
'quinquatrigintanongentillion',//2808
'sestrigintanongentillion',//2811
'septentrigintanongentillion',//2814
'octotrigintanongentillion',//2817
'noventrigintanongentillion',//2820
'quadragintanongentillion',//2823
'unquadragintanongentillion',//2826
'duoquadragintanongentillion',//2829
'tresquadragintanongentillion',//2832
'quattuorquadragintanongentillion',//2835
'quinquaquadragintanongentillion',//2838
'sesquadragintanongentillion',//2841
'septenquadragintanongentillion',//2844
'octoquadragintanongentillion',//2847
'novenquadragintanongentillion',//2850
'quinquagintanongentillion',//2853
'unquinquagintanongentillion',//2856
'duoquinquagintanongentillion',//2859
'tresquinquagintanongentillion',//2862
'quattuorquinquagintanongentillion',//2865
'quinquaquinquagintanongentillion',//2868
'sesquinquagintanongentillion',//2871
'septenquinquagintanongentillion',//2874
'octoquinquagintanongentillion',//2877
'novenquinquagintanongentillion',//2880
'sexagintanongentillion',//2883
'unsexagintanongentillion',//2886
'duosexagintanongentillion',//2889
'tresexagintanongentillion',//2892
'quattuorsexagintanongentillion',//2895
'quinquasexagintanongentillion',//2898
'sesexagintanongentillion',//2901
'septensexagintanongentillion',//2904
'octosexagintanongentillion',//2907
'novensexagintanongentillion',//2910
'septuagintanongentillion',//2913
'unseptuagintanongentillion',//2916
'duoseptuagintanongentillion',//2919
'treseptuagintanongentillion',//2922
'quattuorseptuagintanongentillion',//2925
'quinquaseptuagintanongentillion',//2928
'seseptuagintanongentillion',//2931
'septenseptuagintanongentillion',//2934
'octoseptuagintanongentillion',//2937
'novenseptuagintanongentillion',//2940
'octogintanongentillion',//2943
'unoctogintanongentillion',//2946
'duooctogintanongentillion',//2949
'tresoctogintanongentillion',//2952
'quattuoroctogintanongentillion',//2955
'quinquaoctogintanongentillion',//2958
'sexoctogintanongentillion',//2961
'septemoctogintanongentillion',//2964
'octooctogintanongentillion',//2967
'novemoctogintanongentillion',//2970
'nonagintanongentillion',//2973
'unnonagintanongentillion',//2976
'duononagintanongentillion',//2979
'trenonagintanongentillion',//2982
'quattuornonagintanongentillion',//2985
'quinquanonagintanongentillion',//2988
'senonagintanongentillion',//2991
'septenonagintanongentillion',//2994
'octononagintanongentillion',//2997
'undemillillion',//3000
'millillion',//3003
];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }
	//deleting first nulls in chunks array
	for(i=chunks.length-1; i>=0; i--){
		if(chunks[i]==0){chunks.pop();}
		else{break;}
	}
	
    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
	
    for (i = 0; i < chunksLen; i++) {
        chunk = parseInt(chunks[i]);

        if (chunk) {
			chunkwords = [];
            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                chunkwords.push(word);
            }

            /* Add unit word if array item exists */
        if(units[ints[0]]!=='' && tens[ints[1]]!==''){
			if(units[ints[0]]!==undefined && tens[ints[1]]!==undefined){
				chunkwords.push(tens[ints[1]]+'-'+units[ints[0]]);
			}
			else{
				if ((word = units[ints[0]])) {
					chunkwords.push(word);
				}
			
				/* Add tens word if array item exists */
				if ((word = tens[ints[1]])) {
					chunkwords.push(word);
				}
			}
		}else{
            if ((word = units[ints[0]])) {
                chunkwords.push(word);
            }
			
            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                chunkwords.push(word);
            }
		}
            /* Add 'and' string after units or tens integer if: */
            if (ints[0] || ints[1]) {

                /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                if (ints[2] || !i && chunksLen-1) {
                    chunkwords.push(and);
                }

            }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                chunkwords.push(word+space+'hundred');
            }
			words.push(chunkwords.reverse().join(space));
        }
		if(i!==chunksLen-1 && chunks[i+1]!=='-' && chunks[i]!=='000'){words.push(chunk_delimiter);}
    }

	if(string.charAt(0)=='-'){words.push(space, 'minus')};
    words = words.reverse().join('');
	return words;

}

function portions(nulls){
	var str = '1';
	while(str.length<=nulls){
		str=str+'0';
	}
	return str;
}

function float_to_words(n, delimiter, whole_delimiter){ //n - string, delimiter - float point delimiter, default - no need to define
	var delimiter = delimiter || '.';	//if delimiter is undefined - defaulst delimiter is '.'
	var whole_delimiter = whole_delimiter || ' whole, and '; //default this false to do generation the float number

	var number = n.split(delimiter);	//split number string by delimiter
	var words1 = numberToEnglish(number[0], 'and', ' ', ', then '); //whole part to words
	var words1 = words1.charAt(0).toUpperCase() + words1.slice(1); //First symbol to Upper Case
	
	if(number[1]==undefined){return words1+'.';}//if there is no partial digits, return whole + dot
	
	//delete nulls from the end of partial string
	for(i = number[1].length-1; i>=0; i--){
		if(number[1][i]=='0'){number[1] = number[1].substr(0, number[1].length - 1)}
		else{break;}
	}
	
	if(number[1]==''){return words1+'.';}//if no partial digits - return only whole part + point
	else{//if partial number not 0
		var words2 = numberToEnglish(number[1], 'and', ' ', ', '); //part of float number - to words
		var portionths = portions(number[1].length);	//portions of the partial string for this number
		//portion to words by - delimiter + 'ths' + dot in the end.
		var portionthswords = numberToEnglish(portionths, 'and', '-', '') + 'ths.';
		
		if((portionths.length-1)%3==0 || (portionths.length-1==2)){//if -illionths, -thousandths, or -hundredths
			//delete word "one" from beginning
			portionthswords = portionthswords.substr(4, portionthswords.length);
		}
		return words = words1 + whole_delimiter + words2 + ' ' + portionthswords; //return words
	}
}

//generate random float number
function gen_float(digits, integer, float_delimiter){ //to get integer, set this - true
	var number = '';
	var digits = digits || 63; //default value, including float delimiter
	var float_delimiter = float_delimiter || '.'; //devault delimiter
	var integer = integer || false; //default this false to do generation the float number

	var digit;
	var min_digit_value = 0; //including
	var max_digit_value = 10; //excluding

	if(integer===false){
		var wholelength = Math.floor(Math.random() * (digits - 0)) + 0;
		var partial = (digits-2) - wholelength; //exclude delimiter

		for (i=0; i<=wholelength; i++){
			digit = Math.floor(Math.random() * (max_digit_value - min_digit_value)) + min_digit_value;
			number += digit.toString(10);
		}
	
		number = number + float_delimiter;
	
		for (i=0; i<=partial; i++){
			digit = Math.floor(Math.random() * (max_digit_value - min_digit_value)) + min_digit_value;
			number += digit.toString(10);
		}
		return number = (Math.random()>0.5)? number = '-'+number : number;
	}else{
		for (i=0; i<=digits; i++){
			digit = Math.floor(Math.random() * (max_digit_value - min_digit_value)) + min_digit_value;
			number += digit.toString(10);
		}
		return number = (Math.random()>0.5)? number = '-'+number : number;
	}	
}

function test(){
	//whole integer:
	var random_integer = gen_float(64, true);	//true - to get whole integer with 64 digits
	var integer_string_words = float_to_words(random_integer, '.');//whole integer here

	//split by 3 digits
	var arr = random_integer.split(/(?=(?:\d{90})+(?!\d))/);//by 90 in a row
	for(i=0;i<arr.length;i++){
		document.write(arr[i].split(/(?=(?:\d{3})+(?!\d))/)+'<br>');//display by 3 in each row
	}
	document.write(integer_string_words);//display number_to_words

	//float integer
	var random_float = gen_float(64, false, ','); //64 digits float, with ',' coma delimiter
	var float_words_string = float_to_words(random_float, ',');
	document.write('<br><br>coma delimiter: ', random_float, '<br>', float_words_string); //display float number and words.
}
