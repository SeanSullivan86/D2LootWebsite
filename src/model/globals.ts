
export const ITEM_QUALITY_NAMES = ["", "Low Quality", "Normal", "Superior", "Magic", "Set", "Rare", "Unique", "Crafted"];

export const DROP_CONTEXT_FRIENDLY_NAMES = new Map();
DROP_CONTEXT_FRIENDLY_NAMES.set("L85_UNIQUE_MOB", "Unique Mob (Level 85 Area)");
DROP_CONTEXT_FRIENDLY_NAMES.set("L85_NORMAL_MOB", "Normal Mob (Level 85 Area)");
DROP_CONTEXT_FRIENDLY_NAMES.set("HELL_BAAL", "Hell Baal");
DROP_CONTEXT_FRIENDLY_NAMES.set("ALL","All 3 Combined");

const itemTypeTypeFriendlyNames:Record<string,string> = {
    "swor" : "Sword",
    "hamm" : "Hammer",
    "spea" : "Spear",
    "pole" : "Polearm",
    "axe" : "Axe",
    "abow" : "Amazon Bow",
    "aspe" : "Amazon Spear",
    "ajav" : "Amazon Javelin",
    "jave" : "Javelin",
    "bow" : "Bow",
    "xbow" : "Crossbow",
    "h2h2" : "Claws2",
    "h2h" : "Claws",
    "tkni" : "Throwing Knife",
    "mace" : "Mace",
    "taxe" : "Throwing Axe",
    "scep" : "Scepter",
    "knif" : "Knife",
    "club" : "Club"
}

export function friendlyItemTypeTypeName(code: string):string {
    return itemTypeTypeFriendlyNames[code] ?? code;
}

const itemTypeTsv = `6l7	Crusader Bow	bow	15	63			lbb	8l8	6l7
xlt	Templar Coat	tors					plt	xlt	ult
sbr	Sabre	swor	3	8			sbr	9sb	7sb
7lw	Feral Claws	h2h2	22	53			clw	9lw	7lw
bab	Carnage Helm	phlm					ba1	ba6	bab
baa	Slayer Guard	phlm					ba5	baa	baf
bad	Destroyer Helm	phlm					ba3	ba8	bad
bac	Fury Visor	phlm					ba2	ba7	bac
baf	Guardian Crown	phlm					ba5	baa	baf
uh9	Bone Visage	helm					bhm	xh9	uh9
bae	Conqueror Crown	phlm					ba4	ba9	bae
sbw	Short Bow	bow	1	4			sbw	8sb	6sb
7ma	Reinforced Mace	mace	41	49			mac	9ma	7ma
bal	Balanced Axe	taxe	5	10			bal	9b8	7b8
xmb	Mesh Boots	boot					mbt	xmb	umb
luv	The Black Tower Key	key							
bar	Bardiche	pole	1	27			bar	9b7	7o7
xmg	Heavy Bracers	glov					mgl	xmg	umg
mxb	Crossbow	xbow	9	16			mxb	8mx	6mx
xml	Round Shield	shie					sml	xml	uml
bax	Broad Axe	axe	10	18			bax	9ba	7ba
9qr	Scissors Quhab	h2h2	19	40			skr	9qr	7qr
7mp	War Spike	axe	30	48			mpi	9mp	7mp
9qs	Holy Water Sprinkler	scep	14	36			gsc	9qs	7qs
scm	Scimitar	swor	2	6			scm	9sm	7sm
vip	Top of the Horadric Staff	amul							
glb	Flawless Sapphire	gems							
scl	Scale Mail	tors					scl	xcl	ucl
9s8	Battle Scythe	pole	18	45			scy	9s8	7s8
7mt	Devil Star	mace	43	53			mst	9mt	7mt
gld	Gold	gold							
9s9	Simbilan	jave	8	32			ssp	9s9	7s7
7o7	Ogre Axe	pole	28	145			bar	9b7	7o7
scp	Scepter	scep	6	11			scp	9sc	7sc
bbb	Lam Esen's Tome	ques							
glg	Flawless Emerald	geme							
tes	Twisted Essence of Suffering	ques							
scy	Scythe	pole	8	20			scy	9s8	7s8
ktr	Katar	h2h	4	7			ktr	9ar	7ar
hp1	Minor Healing Potion	hpot							
hp3	Healing Potion	hpot							
scz	Scalp	body							
hp2	Light Healing Potion	hpot							
6lb	Shadow Bow	bow	15	59			lbw	8lb	6lb
glr	Flawless Ruby	gemr							
hp5	Super Healing Potion	hpot							
hp4	Greater Healing Potion	hpot							
uhb	Myrmidon Greaves	boot					hbt	xhb	uhb
glv	Glaive	jave	5	17			glv	9gl	7gl
xng	Linked Mail	tors					rng	xng	ung
uhc	Colossus Girdle	belt					hbl	zhb	uhc
glw	Flawless Diamond	gemd							
uhg	Ogre Gauntlets	glov					hgl	xhg	uhg
gly	Flawless Topaz	gemt							
lwb	Long War Bow	bow	3	23			lwb	8lw	6lw
uhl	Giant Conch	helm					fhl	xhl	uhl
gma	Great Maul	hamm	38	58			gma	9gm	7gm
uhn	Boneweave	tors					chn	xhn	uhn
uhm	Spired Helm	helm					ghm	xhm	uhm
6ls	Stalagmite	staf	75	107			lst	8ls	6ls
yps	Antidote Potion	apot							
7p7	War Pike	spea	33	178			pik	9p9	7p7
6lw	Hydra Bow	bow	10	68			lwb	8lw	6lw
6lx	Pellet Bow	xbow	28	73			lxb	8lx	6lx
ceh	Charged Essence of Hatred	ques							
9sb	Shamshir	swor	10	24			sbr	9sb	7sb
9sc	Rune Scepter	scep	13	24			scp	9sc	7sc
j34	A Jade Figurine	ques							
dgr	Dagger	knif	1	4			dgr	9dg	7dg
ces	Cestus	h2h	7	15			ces	9cs	7cs
9sm	Cutlass	swor	8	21			scm	9sm	7sm
aar	Ancient Armor	tors					aar	xar	uar
9sp	Barbed Club	club	13	25			spc	9sp	7sp
lxb	Light Crossbow	xbow	6	9			lxb	8lx	6lx
9sr	War Spear	spea	10	37			spr	9sr	7sr
tgl	Light Gauntlets	glov					tgl	xtg	utg
9ss	Gladius	swor	8	22			ssd	9ss	7ss
fla	Flail	mace	1	24			fla	9fl	7fl
9st	Yari	spea	29	59			spt	9st	7st
flc	Falchion	swor	9	17			flc	9fc	7fc
wms	Thawing Potion	wpot							
flb	Flamberge	swor	13	26	9	15	flb	9fb	7fb
8s8	Short Siege Bow	bow	13	30			sbb	8s8	6s7
fld	Field Plate	tors					fld	xld	uld
hpf	null	hpot							
pa2	Rondache	ashd					pa2	pa7	pac
flg	Flag	body							
6mx	Gorgon Crossbow	xbow	25	87			mxb	8mx	6mx
xow	Pavise	shie					tow	xow	uow
pa1	Targe	ashd					pa1	pa6	pab
uit	Monarch	shie					kit	xit	uit
pa4	Aerin Shield	ashd					pa4	pa9	pae
pa3	Heraldic Shield	ashd					pa3	pa8	pad
pa6	Akaran Targe	ashd					pa1	pa6	pab
pa5	Crown Shield	ashd					pa5	paa	paf
9ta	Francisca	taxe	11	22			tax	9ta	7ta
pa8	Protector Shield	ashd					pa3	pa8	pad
hpo	null	hpot							
pa7	Akaran Rondache	ashd					pa2	pa7	pac
92a	Twin Axe	axe	13	38			2ax	92a	72a
7pa	Cryptic Axe	pole	33	150			pax	9pa	7pa
ztb	Battle Belt	belt					tbl	ztb	utc
pa9	Gilded Shield	ashd					pa4	pa9	pae
dhn	Diablo's Horn	ques							
wnd	Wand	wand	2	4			wnd	9wn	7wn
92h	Espandon	swor	18	40	8	26	2hs	92h	72h
9tk	Battle Dart	tkni	8	16			tkf	9tk	7tk
7pi	Stygian Pilum	jave	14	64			pil	9pi	7pi
xpk	Barbed Shield	shie					spk	xpk	upk
xpl	Russet Armor	tors					spl	xpl	upl
9tr	Fuscina	spea	19	37			tri	9tr	7tr
9ts	Harpoon	jave	13	35			tsp	9ts	7ts
isc	Scroll of Identify	scro							
9tw	Greater Talons	h2h2	21	35			btl	9tw	7tw
8rx	Chu-Ko-Nu	xbow	14	32			rxb	8rx	6rx
qbr	Khalim's Brain	ques							
8sb	Edge Bow	bow	6	19			sbw	8sb	6sb
ci1	Coronet	circ					ci1	ci2	ci3
ci0	Circlet	circ					ci0	ci2	ci3
dir	Dirk	knif	3	9			dir	9di	7di
ci3	Diadem	circ					ci1	ci2	ci3
ci2	Tiara	circ					ci1	ci2	ci3
pab	Sacred Targe	ashd					pa1	pa6	pab
bet	Burning Essence of Terror	ques							
paa	Royal Shield	ashd					pa5	paa	paf
pad	Kurast Shield	ashd					pa3	pa8	pad
pac	Sacred Rondache	ashd					pa2	pa7	pac
paf	Vortex Shield	ashd					pa5	paa	paf
pae	Zakarum Shield	ashd					pa4	pa9	pae
bey	Baal's Eye	ques							
8ss	Jo Staff	staf	6	21			sst	8ss	6ss
7qr	Scissors Suwayyah	h2h2	40	51			skr	9qr	7qr
gpb	Perfect Sapphire	gems							
7qs	Seraph Rod	scep	45	54			gsc	9qs	7qs
hrb	Herb	herb							
7s7	Balrog Spear	jave	33	63			ssp	9s9	7s7
ukp	Hydraskull	helm					skp	xkp	ukp
8sw	Rune Bow	bow	14	35			swb	8sw	6sw
7s8	Thresher	pole	12	141			scy	9s8	7s8
fng	Fang	body							
gpg	Perfect Emerald	geme							
gpl	Strangling Gas Potion	tpot	0	1			gpl		
gpm	Choking Gas Potion	tpot	0	1			gpm		
hrn	Horn	body							
pax	Poleaxe	pole	18	39			pax	9pa	7pa
zvb	Sharkskin Belt	belt					vbl	zvb	uvc
chn	Chain Mail	tors					chn	xhn	uhn
gpr	Perfect Ruby	gemr							
ulb	Wyrmhide Boots	boot					lbt	xlb	ulb
gps	Rancid Gas Potion	tpot	0	1			gps		
ula	Scarab Husk	tors					hla	xla	ula
hrt	Heart	body							
xrg	Scutum	shie					lrg	xrg	urg
uld	Kraken Shell	tors					fld	xld	uld
gpv	Perfect Amethyst	gema							
ulc	Spiderweb Sash	belt					lbl	zlb	ulc
gpw	Perfect Diamond	gemd							
elx	Elixir	elix							
ulg	Bramble Mitts	glov					lgl	xlg	ulg
gpy	Perfect Topaz	gemt							
9vo	Bill	pole	14	53			vou	9vo	7vo
xrn	Grand Crown	helm					crn	xrn	urn
ulm	Armet	helm					hlm	xlm	ulm
xrs	Cuirass	tors					brs	xrs	urs
qf2	Khalim's Will	mace	1	15			fla		
ult	Hellforge Plate	tors					plt	xlt	ult
2hs	Two-Handed Sword	swor	8	17	2	9	2hs	92h	72h
qf1	Khalim's Flail	mace	1	15			fla		
ob2	Sacred Globe	orb	3	8			ob2	ob7	obc
ob1	Eagle Orb	orb	2	5			ob1	ob6	obb
ob4	Clasped Orb	orb	5	12			ob4	ob9	obe
ob3	Smoked Sphere	orb	4	10			ob3	ob8	obd
ob6	Glowing Orb	orb	8	21			ob1	ob6	obb
9wa	Naga	axe	16	45			wax	9wa	7wa
ob5	Jared's Stone	orb	8	18			ob5	oba	obf
9wb	Wrist Spike	h2h	13	27			wrb	9wb	7wb
ob8	Cloudy Sphere	orb	11	29			ob3	ob8	obd
9wc	Grim Scythe	pole	30	70			wsc	9wc	7wc
ob7	Crystalline Globe	orb	10	26			ob2	ob7	obc
9wd	Ancient Sword	swor	18	43			wsd	9wd	7wd
7sb	Elegant Blade	swor	33	45			sbr	9sb	7sb
7sc	Mighty Scepter	scep	40	52			scp	9sc	7sc
ob9	Sparkling Ball	orb	13	32			ob4	ob9	obe
hst	Horadric Staff	staf	12	20			hst		
9wh	Battle Hammer	hamm	35	58			whm	9wh	7wh
umc	Mithril Coil	belt					mbl	zmb	umc
umb	Boneweave Boots	boot					mbt	xmb	umb
xsh	Grim Shield	shie					bsh	xsh	ush
tkf	Throwing Knife	tkni	2	3			tkf	9tk	7tk
umg	Vambraces	glov					mgl	xmg	umg
9wn	Burnt Wand	wand	8	18			wnd	9wn	7wn
7sm	Ataghan	swor	26	46			scm	9sm	7sm
xsk	Death Mask	helm					msk	xsk	usk
7sp	Tyrant Club	club	32	58			spc	9sp	7sp
9ws	Divine Scepter	scep	16	38			wsp	9ws	7ws
uml	Luna	shie					sml	xml	uml
7sr	Hyperion Spear	spea	35	119			spr	9sr	7sr
7ss	Falcata	swor	31	59			ssd	9ss	7ss
7st	Ghost Spear	spea	18	155			spt	9st	7st
6s7	Diamond Bow	bow	33	40			sbb	8s8	6s7
vou	Voulge	pole	6	21			vou	9vo	7vo
7ta	Flying Axe	taxe	17	65			tax	9ta	7ta
qey	Khalim's Eye	ques							
wrb	Wrist Blade	h2h	5	9			wrb	9wb	7wb
72a	Ettin Axe	axe	33	66			2ax	92a	72a
bhm	Bone Helm	helm					bhm	xh9	uh9
9xf	Fascia	h2h	8	37			axf	9xf	7xf
xtb	Battle Boots	boot					tbt	xtb	utb
xtg	Battle Gauntlets	glov					tgl	xtg	utg
72h	Legend Sword	swor	50	94	22	56	2hs	92h	72h
xth	Embossed Plate	tors					gth	xth	uth
7tk	Flying Knife	tkni	23	54			tkf	9tk	7tk
obb	Heavenly Stone	orb	21	46			ob1	ob6	obb
oba	Swirling Crystal	orb	18	42			ob5	oba	obf
ung	Diamond Mail	tors					rng	xng	ung
obd	Demon Heart	orb	23	55			ob3	ob8	obd
obc	Eldritch Orb	orb	18	50			ob2	ob7	obc
obf	Dimensional Shard	orb	30	53			ob5	oba	obf
obe	Vortex Orb	orb	12	66			ob4	ob9	obe
7tr	Stygian Pike	spea	29	144			tri	9tr	7tr
xtp	Mage Plate	tors					ltp	xtp	utp
gsc	Grand Scepter	scep	8	18			gsc	9qs	7qs
7ts	Winged Harpoon	jave	27	35			tsp	9ts	7ts
xts	Ancient Shield	shie					gts	xts	uts
gsb	Sapphire	gems							
xtu	Trellised Armor	tors					stu	xtu	utu
vps	Stamina Potion	spot							
gsd	Great Sword	swor	25	42	12	20	gsd	9gd	7gd
7tw	Runic Talons	h2h2	24	44			btl	9tw	7tw
gsg	Emerald	geme							
6rx	Demon Crossbow	xbow	26	40			rxb	8rx	6rx
6sb	Spider Bow	bow	23	50			sbw	8sb	6sb
wsc	War Scythe	pole	15	36			wsc	9wc	7wc
g33	The Gidbinn	knif	3	7			g33		
cm1	Small Charm	scha							
xuc	Defender	shie					buc	xuc	uuc
gsr	Ruby	gemr							
cm3	Grand Charm	lcha							
wsd	War Sword	swor	8	20			wsd	9wd	7wd
g34	The Golden Bird	ques							
cm2	Large Charm	mcha							
gsw	Diamond	gemd							
skc	Chipped Skull	gemz							
gsv	Amethyst	gema							
gsy	Topaz	gemt							
xui	Ghost Armor	tors					qui	xui	uui
xul	Chaos Armor	tors					ful	xul	uul
skf	Flawed Skull	gemz							
ywn	Yew Wand	wand	2	8			ywn	9yw	7yw
8ws	Rune Staff	staf	24	58			wst	8ws	6ws
wsp	War Scepter	scep	10	17			wsp	9ws	7ws
skl	Flawless Skull	gemz							
6ss	Walking Stick	staf	69	85			sst	8ss	6ss
rin	Ring	ring							
9yw	Petrified Wand	wand	8	24			ywn	9yw	7yw
clb	Club	club	1	6			clb	9cl	7cl
wst	War Staff	staf	12	28			wst	8ws	6ws
skp	Skull Cap	helm					skp	xkp	ukp
6sw	Ward Bow	bow	20	53			swb	8sw	6sw
gth	Gothic Plate	tors					gth	xth	uth
skr	Scissors Katar	h2h	9	17			skr	9qr	7qr
uow	Aegis	shie					tow	xow	uow
sku	Skull	gemz							
skz	Perfect Skull	gemz							
clm	Claymore	swor	13	30	5	12	clm	9cm	7cm
xvb	Sharkskin Boots	boot					vbt	xvb	uvb
gts	Gothic Shield	shie					gts	xts	uts
xvg	Sharkskin Gloves	glov					vgl	xvg	uvg
clw	Claws	h2h	8	15			clw	9lw	7lw
7vo	Colossus Voulge	pole	17	165			vou	9vo	7vo
upl	Balrog Skin	tors					spl	xpl	upl
upk	Blade Barrier	shie					spk	xpk	upk
bkd	Key to the Cairn Stones	ques							
qhr	Khalim's Heart	ques							
bkf	Balanced Knife	tkni	1	8			bkf	9bk	7bk
7wa	Berserker Axe	axe	24	71			wax	9wa	7wa
7wb	Wrist Sword	h2h2	34	45			wrb	9wb	7wb
7wc	Giant Thresher	pole	40	114			wsc	9wc	7wc
7wd	Mythical Sword	swor	40	50			wsd	9wd	7wd
toa	Right-click to reset Stat/Skill Points}Token of Absolution	ques							
7wh	Legendary Mallet	hamm	50	61			whm	9wh	7wh
bks	Scroll of Inifuss	ques							
mac	Mace	mace	3	10			mac	9ma	7ma
7wn	Polished Wand	wand	18	33			wnd	9wn	7wn
hxb	Heavy Crossbow	xbow	14	26			hxb	8hx	6hx
7ws	Caduceus	scep	37	43			wsp	9ws	7ws
sml	Small Shield	shie					sml	xml	uml
ne2	Zombie Head	head					ne2	ne7	neg
bld	Blade	knif	4	15			bld	9bl	7bl
ne1	Preserved Head	head					ne1	ne6	neb
ne4	Gargoyle Head	head					ne4	ne9	nee
tow	Tower Shield	shie					tow	xow	uow
ne3	Unraveller Head	head					ne3	ne8	ned
ne6	Mummified Trophy	head					ne1	ne6	neb
ne5	Demon Head	head					ne5	nea	nef
mau	Maul	hamm	30	43			mau	9m9	7m7
ne8	Sexton Trophy	head					ne3	ne8	ned
ne7	Fetish Trophy	head					ne2	ne7	neg
dr1	Wolf Head	pelt					dr1	dr6	drb
ne9	Cantor Trophy	head					ne4	ne9	nee
dr3	Antlers	pelt					dr3	dr8	drd
7xf	War Fist	h2h2	44	53			axf	9xf	7xf
dr2	Hawk Helm	pelt					dr2	dr7	drc
dr5	Spirit Mask	pelt					dr5	dra	drf
dr4	Falcon Mask	pelt					dr4	dr9	dre
dr7	Griffon Headdress	pelt					dr2	dr7	drc
dr6	Alpha Helm	pelt					dr1	dr6	drb
dr9	Sacred Feathers	pelt					dr4	dr9	dre
urg	Hyperion	shie					lrg	xrg	urg
dr8	Hunter's Guise	pelt					dr3	dr8	drd
urn	Corona	helm					crn	xrn	urn
tr1	Horadric Scroll	ques							
tr2	Right Click to Cast}Scroll of Resistance	ques							
mbl	Belt	belt					mbl	zmb	umc
urs	Great Hauberk	tors					brs	xrs	urs
ful	Full Plate Mail	tors					ful	xul	uul
mbr	Mephisto's Brain	ques							
mbt	Chain Boots	boot					mbt	xmb	umb
gwn	Grim Wand	wand	5	11			gwn	9gw	7gw
am1	Stag Bow	abow	7	12			am1	am6	amb
am3	Maiden Spear	aspe	18	24			am3	am8	amd
am2	Reflex Bow	abow	9	19			am2	am7	amc
am5	Maiden Javelin	ajav	8	14			am5	ama	amf
am4	Maiden Pike	aspe	23	55			am4	am9	ame
am7	Ceremonial Bow	abow	19	41			am2	am7	amc
neb	Minion Skull	head					ne1	ne6	neb
am6	Ashwood Bow	abow	16	29			am1	am6	amb
ush	Troll Nest	shie					bsh	xsh	ush
nea	Hierophant Trophy	head					ne5	nea	nef
am9	Ceremonial Pike	aspe	42	101			am4	am9	ame
usk	Demonhead	helm					msk	xsk	usk
ned	Overseer Skull	head					ne3	ne8	ned
am8	Ceremonial Spear	aspe	34	51			am3	am8	amd
nef	Bloodlord Skull	head					ne5	nea	nef
nee	Succubus Skull	head					ne4	ne9	nee
neg	Hellspawn Skull	head					ne2	ne7	neg
sol	Soul	body							
pil	Pilum	jave	4	9			pil	9pi	7pi
6ws	Archon Staff	staf	83	99			wst	8ws	6ws
dra	Totemic Mask	pelt					dr5	dra	drf
pik	Pike	spea	14	63			pik	9p9	7p7
drc	Sun Spirit	pelt					dr2	dr7	drc
7yw	Ghost Wand	wand	20	40			ywn	9yw	7yw
drb	Blood Spirit	pelt					dr1	dr6	drb
dre	Sky Spirit	pelt					dr4	dr9	dre
pk2	Key of Hate	ques							
drd	Earth Spirit	pelt					dr3	dr8	drd
pk1	Key of Terror	ques							
xyz	Right Click to permanently add 20 to Life}Potion of Life	ques							
drf	Dream Spirit	pelt					dr5	dra	drf
pk3	Key of Destruction	ques							
lax	Large Axe	axe	6	13			lax	9la	7la
utb	Mirrored Boots	boot					tbt	xtb	utb
utc	Troll Belt	belt					tbl	ztb	utc
spc	Spiked Club	club	5	8			spc	9sp	7sp
uth	Lacquered Plate	tors					gth	xth	uth
utg	Crusader Gauntlets	glov					tgl	xtg	utg
spe	Spleen	body							
tri	Trident	spea	9	15			tri	9tr	7tr
rng	Ring Mail	tors					rng	xng	ung
lbb	Long Battle Bow	bow	3	18			lbb	8l8	6l7
spl	Splint Mail	tors					spl	xpl	upl
spk	Spiked Shield	shie					spk	xpk	upk
utp	Archon Plate	tors					ltp	xtp	utp
qll	Quill	body							
spr	Spear	spea	3	15			spr	9sr	7sr
ama	Ceremonial Javelin	ajav	18	35			am5	ama	amf
uts	Ward	shie					gts	xts	uts
spt	Spetum	spea	15	23			spt	9st	7st
amc	Grand Matron Bow	abow	14	72			am2	am7	amc
amb	Matriarchal Bow	abow	20	47			am1	am6	amb
lbl	Sash	belt					lbl	zlb	ulc
utu	Wire Fleece	tors					stu	xtu	utu
ame	Matriarchal Pike	aspe	37	153			am4	am9	ame
amd	Matriarchal Spear	aspe	65	95			am3	am8	amd
amf	Matriarchal Javelin	ajav	30	54			am5	ama	amf
lbt	Boots	boot					lbt	xlb	ulb
lbw	Long Bow	bow	3	10			lbw	8lb	6lb
uuc	Heater	shie					buc	xuc	uuc
d33	Decoy Gidbinn	knif	1	2			d33		
tsc	Scroll of Town Portal	scro							
uui	Dusk Shroud	tors					qui	xui	uui
amu	Amulet	amul							
cqv	Bolts	xboq							
box	Horadric Cube	ques							
uul	Shadow Plate	tors					ful	xul	uul
tsp	Throwing Spear	jave	5	15			tsp	9ts	7ts
crn	Crown	helm					crn	xrn	urn
bpl	null	mpot							
uvb	Scarabshell Boots	boot					vbt	xvb	uvb
gzv	Flawless Amethyst	gema							
uvc	Vampirefang Belt	belt					vbl	zvb	uvc
bps	null	mpot							
crs	Crystal Sword	swor	5	15			crs	9cr	7cr
uvg	Vampirebone Gloves	glov					vgl	xvg	uvg
rpl	null	hpot							
r01	El Rune	rune							
rps	null	hpot							
r03	Tir Rune	rune							
r02	Eld Rune	rune							
r05	Eth Rune	rune							
r04	Nef Rune	rune							
r07	Tal Rune	rune							
plt	Plate Mail	tors					plt	xlt	ult
r06	Ith Rune	rune							
r09	Ort Rune	rune							
r08	Ral Rune	rune							
ssd	Short Sword	swor	2	7			ssd	9ss	7ss
cst	Gnarled Staff	staf	4	12			cst	8cs	6cs
lea	Leather Armor	tors					lea	xea	uea
9b7	Lochaber Axe	pole	6	58			bar	9b7	7o7
leg	Wirt's Leg	club	2	8			leg		
9b8	Hurlbat	taxe	13	27			bal	9b8	7b8
9b9	Gothic Sword	swor	39	60	14	40	bsw	9b9	7b7
r10	Thul Rune	rune							
ssp	Short Spear	jave	2	13			ssp	9s9	7s7
r12	Sol Rune	rune							
mgl	Chain Gloves	glov					mgl	xmg	umg
r11	Amn Rune	rune							
r14	Dol Rune	rune							
sst	Short Staff	staf	1	5			sst	8ss	6ss
r13	Shael Rune	rune							
r16	Io Rune	rune							
r15	Hel Rune	rune							
r18	Ko Rune	rune							
r17	Lum Rune	rune							
r19	Fal Rune	rune							
jav	Javelin	jave	1	5			jav	9ja	7ja
brn	Brandistock	spea	7	17			brn	9br	7br
jaw	Jawbone	body							
brs	Breast Plate	tors					brs	xrs	urs
std	Standard of Heroes	ques							
9ar	Quhab	h2h	11	24			ktr	9ar	7ar
brz	Brain	body							
9ax	Cleaver	axe	10	33			axe	9ax	7ax
r21	Pul Rune	rune							
r20	Lem Rune	rune							
bsd	Broad Sword	swor	7	14			bsd	9bs	7bs
r23	Mal Rune	rune							
r22	Um Rune	rune							
r25	Gul Rune	rune							
stu	Studded Leather	tors					stu	xtu	utu
r24	Ist Rune	rune							
bsh	Bone Shield	shie					bsh	xsh	ush
r27	Ohm Rune	rune							
r26	Vex Rune	rune							
9ba	Bearded Axe	axe	21	49			bax	9ba	7ba
r29	Sur Rune	rune							
r28	Lo Rune	rune							
bst	Battle Staff	staf	6	13			bst	8bs	6bs
9bk	War Dart	tkni	6	24			bkf	9bk	7bk
9bl	Stiletto	knif	19	36			bld	9bl	7bl
bsw	Bastard Sword	swor	20	28	7	19	bsw	9b9	7b7
aqv	Arrows	bowq							
eyz	Eye	body							
9br	War Fork	spea	16	40			brn	9br	7br
9bs	Battle Sword	swor	16	34			bsd	9bs	7bs
9bt	Tabar	axe	24	77			btx	9bt	7bt
9bw	Tomb Wand	wand	10	22			bwn	9bw	7bw
r30	Ber Rune	rune							
lgl	Leather Gloves	glov					lgl	xlg	ulg
r32	Cham Rune	rune							
r31	Jah Rune	rune							
r33	Zod Rune	rune							
btl	Blade Talons	h2h	10	14			btl	9tw	7tw
key	Key	key							
9cl	Cudgel	club	6	21			clb	9cl	7cl
9cm	Dacian Falx	swor	26	61	13	30	clm	9cm	7cm
btx	Battle Axe	axe	12	32			btx	9bt	7bt
9cr	Dimensional Blade	swor	13	35			crs	9cr	7cr
9cs	Hand Scythe	h2h2	16	37			ces	9cs	7cs
buc	Buckler	shie					buc	xuc	uuc
ibk	Tome of Identify	book							
9dg	Poignard	knif	6	18			dgr	9dg	7dg
9di	Rondel	knif	10	26			dir	9di	7di
swb	Short War Bow	bow	6	14			swb	8sw	6sw
ass	Right Click to learn skill of your choice}Book of Skill	ques							
0sc	Scroll of Knowledge	scro							
8bs	Gothic Staff	staf	14	34			bst	8bs	6bs
ice	Keep it to thaw Anya}Malah's Potion	ques							
7b7	Champion Sword	swor	71	83	24	54	bsw	9b9	7b7
7b8	Winged Axe	taxe	11	56			bal	9b8	7b8
hal	Halberd	pole	12	45			hal	9h9	7h7
8cb	Double Bow	bow	11	26			cbw	8cb	6cb
jew	Jewel	jewl							
hax	Hand Axe	axe	3	6			hax	9ha	7ha
xap	War Hat	helm					cap	xap	uap
8cs	Cedar Staff	staf	11	32			cst	8cs	6cs
7ar	Suwayyah	h2h2	39	52			ktr	9ar	7ar
xar	Ornate Plate	tors					aar	xar	uar
rvl	Full Rejuvenation Potion	rpot							
opl	Fulminating Potion	tpot	0	1			opl		
opm	Exploding Potion	tpot	0	1			opm		
7ax	Small Crescent	axe	38	60			axe	9ax	7ax
rvs	Rejuvenation Potion	rpot							
ops	Oil Potion	tpot	0	1			ops		
hbl	Plated Belt	belt					hbl	zhb	uhc
9fb	Zweihander	swor	29	54	19	35	flb	9fb	7fb
9fc	Tulwar	swor	16	35			flc	9fc	7fc
7ba	Silver-edged Axe	axe	62	110			bax	9ba	7ba
bwn	Bone Wand	wand	3	7			bwn	9bw	7bw
hbt	Greaves	boot					hbt	xhb	uhb
hbw	Hunter's Bow	bow	2	6			hbw	8hb	6hb
9fl	Knout	mace	13	35			fla	9fl	7fl
7bk	Winged Knife	tkni	27	35			bkf	9bk	7bk
7bl	Legend Spike	knif	31	47			bld	9bl	7bl
qui	Quilted Armor	tors					qui	xui	uui
7br	Mancatcher	spea	42	92			brn	9br	7br
7bs	Conquest Sword	swor	37	53			bsd	9bs	7bs
7bt	Decapitator	axe	49	137			btx	9bt	7bt
9h9	Bec-de-Corbin	pole	13	85			hal	9h9	7h7
7bw	Lich Wand	wand	10	31			bwn	9bw	7bw
9ga	Gothic Axe	axe	18	70			gax	9ga	7ga
9gd	Executioner Sword	swor	47	80	24	40	gsd	9gd	7gd
kit	Kite Shield	shie					kit	xit	uit
9gi	Ancient Axe	axe	43	85			gix	9gi	7gi
rxb	Repeating Crossbow	xbow	6	12			rxb	8rx	6rx
9gl	Spiculum	jave	13	38			glv	9gl	7gl
gax	Great Axe	axe	9	30			gax	9ga	7ga
9gm	Martel de Fer	hamm	61	99			gma	9gm	7gm
7cl	Truncheon	club	35	43			clb	9cl	7cl
xcl	Tigulated Mail	tors					scl	xcl	ucl
7cm	Highland Blade	swor	67	96	22	62	clm	9cm	7cm
9gs	Tusk Sword	swor	19	58	10	37	gis	9gs	7gs
7cr	Phase Blade	swor	31	35			crs	9cr	7cr
7cs	Battle Cestus	h2h2	36	42			ces	9cs	7cs
9gw	Grave Wand	wand	13	29			gwn	9gw	7gw
mp2	Light Mana Potion	mpot							
wax	War Axe	axe	10	18			wax	9wa	7wa
mp1	Minor Mana Potion	mpot							
hdm	Horadric Malus	hamm	6	15			hdm		
mp4	Greater Mana Potion	mpot							
mp3	Mana Potion	mpot							
9ha	Hatchet	axe	10	21			hax	9ha	7ha
mp5	Super Mana Potion	mpot							
zhb	War Belt	belt					hbl	zhb	uhc
7dg	Bone Knife	knif	23	49			dgr	9dg	7dg
7di	Mithril Point	knif	37	53			dir	9di	7di
6bs	Shillelagh	staf	65	108			bst	8bs	6bs
gcb	Chipped Sapphire	gems							
gcg	Chipped Emerald	geme							
axf	Hatchet Hands	h2h	2	15			axf	9xf	7xf
axe	Axe	axe	4	11			axe	9ax	7ax
6cb	Great Bow	bow	12	52			cbw	8cb	6cb
xea	Serpentskin Armor	tors					lea	xea	uea
gcr	Chipped Ruby	gemr							
gcw	Chipped Diamond	gemd							
gcv	Chipped Amethyst	gema							
gcy	Chipped Topaz	gemt							
mpf	null	mpot							
6cs	Elder Staff	staf	80	93			cst	8cs	6cs
mpi	Military Pick	axe	7	11			mpi	9mp	7mp
hfh	Hell Forge Hammer	hamm	6	15			hfh		
mpo	null	mpot							
9ja	War Javelin	jave	6	19			jav	9ja	7ja
8hb	Razor Bow	bow	8	22			hbw	8hb	6hb
7fb	Colossus Sword	swor	61	121	26	70	flb	9fb	7fb
7fc	Hydra Edge	swor	28	68			flc	9fc	7fc
7fl	Scourge	mace	3	80			fla	9fl	7fl
vbl	Light Belt	belt					vbl	zvb	uvc
7h7	Great Poleaxe	pole	46	127			hal	9h9	7h7
8hx	Ballista	xbow	33	55			hxb	8hx	6hx
xh9	Grim Helm	helm					bhm	xh9	uh9
vbt	Heavy Boots	boot					vbt	xvb	uvb
hgl	Gauntlets	glov					hgl	xhg	uhg
7ga	Champion Axe	axe	59	94			gax	9ga	7ga
7gd	Colossus Blade	swor	58	115	25	65	gsd	9gd	7gd
ear	Ear	play							
7gi	Glorious Axe	axe	60	124			gix	9gi	7gi
7gl	Ghost Glaive	jave	19	60			glv	9gl	7gl
7gm	Thunder Maul	hamm	33	180			gma	9gm	7gm
9kr	Cinquedeas	knif	15	31			kri	9kr	7kr
gfb	Flawed Sapphire	gems							
7gs	Balrog Blade	swor	55	118	15	75	gis	9gs	7gs
9m9	War Club	hamm	53	78			mau	9m9	7m7
uap	Shako	helm					cap	xap	uap
7gw	Unearthed Wand	wand	22	28			gwn	9gw	7gw
uar	Sacred Armor	tors					aar	xar	uar
gfg	Flawed Emerald	geme							
9la	Military Axe	axe	14	34			lax	9la	7la
7ha	Tomahawk	axe	33	58			hax	9ha	7ha
zlb	Demonhide Sash	belt					lbl	zlb	ulc
gfr	Flawed Ruby	gemr							
xhb	War Boots	boot					hbt	xhb	uhb
xhg	War Gauntlets	glov					hgl	xhg	uhg
gfv	Flawed Amethyst	gema							
gfw	Flawed Diamond	gemd							
gfy	Flawed Topaz	gemt							
xhm	Winged Helm	helm					ghm	xhm	uhm
xhl	Basinet	helm					fhl	xhl	uhl
xhn	Mesh Armor	tors					chn	xhn	uhn
9ls	Rune Sword	swor	10	42			lsd	9ls	7ls
msf	Shaft of the Horadric Staff	staf	10	15			msf		
8l8	Large Siege Bow	bow	10	42			lbb	8l8	6l7
9lw	Greater Claws	h2h2	18	37			clw	9lw	7lw
msk	Mask	helm					msk	xsk	usk
fed	Festering Essence of Destruction	ques							
mss	Mephisto's Soulstone	ques							
9ma	Flanged Mace	mace	15	23			mac	9ma	7ma
zmb	Mesh Belt	belt					mbl	zmb	umc
mst	Morning Star	mace	7	16			mst	9mt	7mt
9mp	Crowbill	axe	14	34			mpi	9mp	7mp
tal	Tail	body							
ucl	Loricated Mail	tors					scl	xcl	ucl
9mt	Jagged Star	mace	20	31			mst	9mt	7mt
lrg	Large Shield	shie					lrg	xrg	urg
xit	Dragon Shield	shie					kit	xit	uit
tax	Throwing Axe	taxe	4	7			tax	9ta	7ta
ghm	Great Helm	helm					ghm	xhm	uhm
8lb	Cedar Bow	bow	10	29			lbw	8lb	6lb
7ja	Hyperion Javelin	jave	21	57			jav	9ja	7ja
6hb	Blade Bow	bow	21	41			hbw	8hb	6hb
lsd	Long Sword	swor	3	19			lsd	9ls	7ls
tbk	Tome of Town Portal	book							
whm	War Hammer	hamm	19	29			whm	9wh	7wh
8ls	Quarterstaff	staf	8	26			lst	8ls	6ls
tbl	Heavy Belt	belt					tbl	ztb	utc
9p9	Lance	spea	27	114			pik	9p9	7p7
8lw	Gothic Bow	bow	10	50			lwb	8lw	6lw
8lx	Arbalest	xbow	14	27			lxb	8lx	6lx
6hx	Colossus Crossbow	xbow	32	91			hxb	8hx	6hx
tbt	Light Plated Boots	boot					tbt	xtb	utb
lst	Long Staff	staf	2	8			lst	8ls	6ls
gis	Giant Sword	swor	9	28	3	16	gis	9gs	7gs
uea	Wyrmhide	tors					lea	xea	uea
ba2	Fanged Helm	phlm					ba2	ba7	bac
cap	Cap	helm					cap	xap	uap
ba1	Jawbone Cap	phlm					ba1	ba6	bab
ba4	Assault Helmet	phlm					ba4	ba9	bae
ba3	Horned Helm	phlm					ba3	ba8	bad
ba6	Jawbone Visor	phlm					ba1	ba6	bab
gix	Giant Axe	axe	22	45			gix	9gi	7gi
ba5	Avenger Guard	phlm					ba5	baa	baf
ba8	Rage Mask	phlm					ba3	ba8	bad
tch	Torch	torc							
ba7	Lion Helm	phlm					ba2	ba7	bac
vgl	Heavy Gloves	glov					vgl	xvg	uvg
ba9	Savage Helmet	phlm					ba4	ba9	bae
hla	Hard Leather Armor	tors					hla	xla	ula
xkp	Sallet	helm					skp	xkp	ukp
7kr	Fanged Knife	knif	15	57			kri	9kr	7kr
7m7	Ogre Maul	hamm	77	106			mau	9m9	7m7
kri	Kris	knif	2	11			kri	9kr	7kr
8mx	Siege Crossbow	xbow	20	42			mxb	8mx	6mx
hlm	Helm	helm					hlm	xlm	ulm
2ax	Double Axe	axe	5	13			2ax	92a	72a
ltp	Light Plate	tors					ltp	xtp	utp
9pa	Partizan	pole	34	75			pax	9pa	7pa
fhl	Full Helm	helm					fhl	xhl	uhl
7la	Feral Axe	axe	25	123			lax	9la	7la
xla	Demonhide Armor	tors					hla	xla	ula
xlb	Demonhide Boots	boot					lbt	xlb	ulb
xld	Sharktooth Armor	tors					fld	xld	uld
sbb	Short Battle Bow	bow	5	11			sbb	8s8	6s7
9pi	Great Pilum	jave	11	26			pil	9pi	7pi
xlg	Demonhide Gloves	glov					lgl	xlg	ulg
xlm	Casque	helm					hlm	xlm	ulm
cbw	Composite Bow	bow	4	8			cbw	8cb	6cb
7ls	Cryptic Sword	swor	5	77			lsd	9ls	7ls`

export const itemTypes:Map<string,ItemType> = new Map()

export class ItemType {
    readonly code:string;
    readonly name:string;
    readonly itemTypeTypeCode:string;
    readonly minDamage?:number;
    readonly maxDamage?:number;
    readonly min1hDamage?:number;
    readonly max1hDamage?:number;
    readonly normalCode?:string;
    readonly exceptionalCode?:string;
    readonly eliteCode?:string;

    constructor(tsvString:string) {
        let parts:string[] = tsvString.split("\t");
        this.code = parts[0]
        this.name = parts[1]
        this.itemTypeTypeCode = parts[2]
        if (parts[3] != "") {
            this.minDamage = Number(parts[3])
            this.maxDamage = Number(parts[4])
        }
        if (parts[5] != "") {
            this.min1hDamage = Number(parts[5])
            this.max1hDamage = Number(parts[6])
        }
        if (parts[7] != "") this.normalCode = parts[7]
        if (parts[8] != "") this.exceptionalCode = parts[8]
        if (parts[9] != "") this.eliteCode = parts[9]
    }

    canBeUpgradedToElite():boolean {
        return (this.eliteCode != undefined) && (this.code != this.eliteCode)
    }

    getEliteVersion():ItemType {
        return itemTypes.get(this.eliteCode!)!
    }

}

itemTypeTsv.split(/\r?\n/)
    .forEach(line => { let itemType = new ItemType(line); itemTypes.set(itemType.code, itemType) });


export class D2PropertyRange {
    name:string;
    param?:string;
    min:number;
    max:number;

    constructor(arrayData:string[], offset:number) {
        this.name = arrayData[offset];
        if (arrayData[offset+1]) this.param = arrayData[offset+1];
        this.min = Number(arrayData[offset+2]);
        this.max = Number(arrayData[offset+3]);
    }
}


export class UniqueItem {
    readonly name:string;
    readonly itemCode:string;
    readonly qlvl:number;
    readonly properties:D2PropertyRange[];

    constructor(tsvString:string) {
        let parts:string[] = tsvString.split("\t");
        this.name = parts[0];
        this.itemCode = parts[1];
        this.qlvl = Number(parts[2]);
        this.properties = [];
        const paramCount = (parts.length - 3)/4;
        if (!Number.isInteger(paramCount)) { console.error("Unexpected paramCount " + paramCount + " : " + tsvString); throw "Unexpected Param Count"; }
        for (let i = 0; i < paramCount; i++) {
            this.properties.push(new D2PropertyRange(parts, 3 + 4*i));
        }
    }

    getItemType():ItemType {
        return itemTypes.get(this.itemCode)!
    }
}



const uniqueItemsTsv:string = `The Gnasher	hax	7	dmg%		60	70
Deathspade	axe	12	dmg%		60	70
Bladebone	2ax	20	dmg%		30	50
Skull Splitter	mpi	28	ltng-max		12	15	att		50	100	dmg%		60	100
Rakescar	wax	36	dmg%		75	150
Axe of Fechmar	lax	11	dmg%		70	90
Goreshovel	bax	19	dmg%		40	50
The Chieftain	btx	26	res-all		10	20
Brainhew	gax	34	manasteal		10	13	dmg%		50	80
Humongous	gix	39	str		20	30	dmg-max		15	25	dmg%		80	120
Torch of Iro	wnd	7
Maelstrom	ywn	19	skill	74	1	3	skill	77	1	3	skill	66	1	3	skill	76	1	3
Gravenspine	bwn	27	mana		25	50
Ume's Lament	gwn	38
Felloak	clb	4	dmg%		70	80
Knell Striker	scp	7	dmg%		70	80
Rusthandle	gsc	23	dmg%		50	60	dmg-undead		50	60	skill	111	1	3
Stormeye	wsp	31	dmg%		80	120	skill	110	3	5
Stoutnail	spc	7	thorns		3	10
Crushflange	mac	12	dmg%		50	60
Bloodrise	mst	20
The General's Tan Do Li Ga	fla	28	dmg%		50	60
Ironstone	whm	36	att		100	150	dmg%		100	150
Bonesnap	mau	32	dmg%		200	300
Steeldriver	gma	39	dmg%		150	250
Rixot's Keen	ssd	3
Blood Crescent	scm	10	dmg%		60	80
Skewer of Krintiz	sbr	14
Gleamscythe	flc	18	dmg%		60	100
Griswold's Edge	bsd	23	fire-min		10	12	fire-max		15	25	dmg%		80	120
Hellplague	lsd	30	dmg%		70	80
Culwen's Point	wsd	39	dmg%		70	80
Shadowfang	2hs	16
Soulflay	clm	26	manasteal		4	10	dmg%		70	100
Kinemil's Awl	gis	31	att		100	150	fire-max		20	40	dmg%		80	100
Blacktongue	bsw	35	dmg%		50	60
Ripsaw	flb	35	dmg%		80	100
The Patriarch	gsd	39	dmg%		100	120
Gull	dgr	6
The Diggler	dir	15
The Jade Tan Do	kri	26	att		100	150
Spectral Shard	bld	34
The Dragon Chang	spr	11
Razortine	tri	16	dmg%		30	50
Bloodthief	brn	23	lifesteal		8	12	dmg%		50	70
Lance of Yaggai	spt	30
The Tannr Gorerod	pik	36	dmg%		80	100
Dimoak's Hew	bar	11
Steelgoad	vou	19	dmg%		60	80	dur		20	40
Soul Harvest	scy	26	dmg%		50	90
The Battlebranch	pax	34	dmg%		50	70	att		50	100
Woestave	hal	38	dmg%		20	40
The Grim Reaper	wsc	39
Bane Ash	sst	7	dmg%		50	60
Serpent Lord	lst	12	dmg%		30	40
Spire of Lazarus	cst	24
The Salamander	bst	28
The Iron Jang Bong	wst	38
Pluckeye	sbw	10
Witherstring	hbw	18	dmg%		40	50
Raven Claw	lbw	20	dmg%		60	70
Rogue's Bow	cbw	27	dmg%		40	60
Stormstrike	sbb	34	dmg%		70	90
Wizendraw	lbb	35	att		50	100	dmg%		70	80	pierce-cold		20	35
Hellclap	swb	36	fire-max		30	50	att		50	75	dmg%		70	90
Blastbark	lwb	38	dmg%		70	130
Leadcrow	lxb	12
Ichorsting	mxb	24
Hellcast	hxb	36	dmg%		70	80
Doomslinger	rxb	38	dmg%		60	100
Biggin's Bonnet	cap	4
Tarnhelm	skp	20	mag%		25	50
Coif of Glory	hlm	19
Duskdeep	fhl	23	ac		10	20	ac%		30	50
Wormskull	bhm	28
Howltusk	ghm	34
Undead Crown	crn	39	ac%		30	60	att-undead		50	100
The Face of Horror	msk	27
Greyform	qui	10
Blinkbat's Form	lea	16
The Centurion	hla	19
Twitchthroe	stu	22
Darkglow	rng	19	ac%		70	100
Hawkmail	scl	20	ac%		80	100
Sparking Mail	chn	23	ac%		75	85	light-thorns		10	14
Venom Ward	brs	27	ac%		60	100
Iceblink	spl	30	ac%		70	80
Boneflesh	plt	35	ac%		100	120
Rockfleece	fld	38	ac%		100	130
Rattlecage	gth	39
Goldskin	ful	38	ac%		120	150
Silks of the Victor	aar	38	ac%		100	120
Heavenly Garb	ltp	39
Pelta Lunata	buc	3	ac%		30	40	dur		8	12
Umbral Disk	sml	12	ac%		40	50	dur		10	15
Stormguild	lrg	18	ac%		50	60	dur		10	15
Wall of the Eyeless	bsh	27	ac%		30	40
Swordback Hold	spk	20	bloody		3	5	ac%		30	60
Steelclash	kit	23	ac%		60	100	dur		15	20
Bverrit Keep	tow	26	ac%		80	120	dur		80	100
The Ward	gts	35	res-all		30	50
The Hand of Broc	lgl	7	ac%		10	20
Bloodfist	vgl	12	ac%		10	20
Chance Guards	mgl	20	mag%		25	40	ac%		20	30
Magefist	tgl	31	ac%		20	30
Frostburn	hgl	39	ac%		10	20
Hotspur	lbt	7	ac%		10	20
Gorefoot	vbt	12	bloody		3	5	ac%		20	30
Treads of Cthon	mbt	20	ac%		30	40
Goblin Toe	tbt	30	ac%		50	60
Tearhaunch	hbt	39	ac%		60	80
Lenymo	lbl	10
Snakecord	vbl	16	ac%		20	30
Nightsmoke	mbl	27	ac%		30	50
Goldwrap	tbl	36	ac%		40	60	gold%		50	80
Bladebuckle	hbl	39	ac%		80	100
Nokozan Relic	amu	14
The Eye of Etlich	amu	20	ac-miss		10	40	light		1	5	lifesteal		3	7	cold-min		1	2	cold-max		3	5	cold-len		50	250
The Mahim-Oak Curio	amu	34
Nagelring	rin	10	att		50	75	mag%		15	30
Manald Heal	rin	20	manasteal		4	7	regen		5	8
The Stone of Jordan	rin	39
Amulet of the Viper	vip	0
Staff of Kings	msf	0
Horadric Staff	hst	0
Hell Forge Hammer	hfh	0
Khalim's Flail	qf1	0
Khalim's Will	qf2	0
Coldkill	9ha	44	dmg%		150	190
Butcher's Pupil	9ax	47	dmg%		150	200
Islestrike	92a	51	dmg%		170	190
Pompeii's Wrath	9mp	53	dmg%		140	170
Guardian Naga	9wa	56	dmg%		150	180
Warlord's Trust	9la	43
Spellsteel	9ba	47	red-mag		12	15
Stormrider	9bt	49
Boneslayer Blade	9ga	50	dmg%		180	220
The Minotaur	9gi	53	str		15	20	dmg%		140	200
Suicide Branch	9wn	41
Carin Shard	9yw	43
Arm of King Leoric	9bw	44
Blackhand Key	9gw	49
Dark Clan Crusher	9cl	42	att%		20	25
Zakarum's Hand	9sc	45	dmg%		180	220
The Fetid Sprinkler	9qs	46	dmg%		160	190	att		150	200
Hand of Blessed Light	9ws	50	dmg%		130	160
Fleshrender	9sp	46	dmg%		130	200
Sureshrill Frost	9ma	47	dmg%		150	180
Moonfall	9mt	50	red-mag		9	12	dmg%		120	150
Baezil's Vortex	9fl	53	dmg%		160	200
Earthshaker	9wh	51
Bloodtree Stump	9m9	56	dmg%		180	220
The Gavel of Pain	9gm	53	dmg%		130	160
Bloodletter	9ss	38	skill	127	2	4	skill	151	1	3
Coldsteel Eye	9sm	39	dmg%		200	250
Hexfire	9sb	41	dmg%		140	160
Blade of Ali Baba	9fc	43	dmg%		60	120	dex		5	15
Ginther's Rift	9cr	45	red-mag		7	12	dmg%		100	150
Headstriker	9bs	47
Plague Bearer	9ls	49
The Atlantean	9wd	50	dmg%		200	250
Crainte Vomir	92h	50	dmg%		160	200
Bing Sz Wang	9cm	51	dmg%		130	160
The Vile Husk	9gs	52	dmg%		150	200
Cloudcrack	9b9	53	dmg%		150	200
Todesfaelle Flamme	9fb	54	dmg%		120	160
Swordguard	9gd	55	res-all		10	20	dmg%		170	180
Spineripper	9dg	40	dmg%		200	240
Heart Carver	9di	44	dmg%		190	240
Blackbog's Sharp	9kr	46
Stormspike	9bl	49
The Impaler	9sr	39	dmg%		140	170
Kelpie Snare	9tr	41	dmg%		140	180
Soulfeast Tine	9br	43	dmg%		150	190	att		150	250
Hone Sundan	9st	45	dmg%		160	200
Spire of Honor	9p9	47	dmg%		150	200
The Meat Scraper	9b7	49	dmg%		150	200
Blackleach Blade	9vo	50	dmg%		100	140
Athena's Wrath	9s8	50	dru		1	3	dmg%		150	180
Pierre Tombale Couant	9pa	51	dmg%		160	220	att		100	200
Husoldal Evo	9h9	52	att		200	250	dmg%		160	200
Grim's Burning Dead	9wc	52	dmg%		140	180	att		200	250
Razorswitch	8ss	36
Ribcracker	8ls	39	dmg%		200	300
Chromatic Ire	8cs	43	res-all		20	40	hp%		20	25
Warpspear	8bs	47
Skull Collector	8ws	49
Skystrike	8sb	36	dmg%		150	200
Riphook	8hb	39	dmg%		180	220	lifesteal		7	10
Kuko Shakaku	8lb	41	dmg%		150	180
Endlesshail	8cb	44	skill	26	3	5	dmg%		180	220
Witchwild String	8s8	47	dmg%		150	170
Cliffkiller	8l8	49	dmg%		190	230	dmg-min		5	10	dmg-max		20	30
Magewrath	8sw	51	red-mag		9	13	att		200	250	dmg%		120	150
Goldstrike Arch	8lw	54	dmg%		200	250	att%		100	150	dmg-undead		100	200	dmg-demon		100	200
Langer Briser	8lx	40	dmg%		170	200	mag%		30	60	dmg-max		10	30
Pus Spitter	8mx	44	dmg%		150	220
Buriza-Do Kyanon	8hx	59	ac		75	150	dmg%		150	200
Demon Machine	8rx	57
Peasant Crown	xap	36	regen		6	12
Rockstopper	xkp	39	res-ltng		20	40	ac%		160	220	res-fire		20	50	res-cold		20	40
Stealskull	xlm	43	ac%		200	240	mag%		30	50
Darksight Helm	xhl	46	res-fire		20	40
Valkyrie Wing	xhm	52	ac%		150	200	ama		1	2	mana-kill		2	4
Crown of Thieves	xrn	57	lifesteal		9	12	ac%		160	200	gold%		80	100
Blackhorn's Face	xsk	49	ac%		180	220
Vampire Gaze	xh9	49	manasteal		6	8	lifesteal		6	8	red-dmg%		15	20	red-mag		10	15
The Spirit Shroud	xui	36	red-mag		7	11
Skin of the Vipermagi	xea	37	res-all		20	35	red-mag		9	13
Skin of the Flayed One	xla	39	regen		15	25	lifesteal		5	7	ac%		150	190
Iron Pelt	xtu	41	red-mag		10	16	red-dmg		15	20	ac%		50	100
Spirit Forge	xng	43	ac%		120	160
Crow Caw	xcl	45	ac%		150	180
Shaftstop	xhn	46	ac%		180	220
Duriel's Shell	xrs	49	ac%		160	200
Skullder's Ire	xpl	50	ac%		160	200
Guardian Angel	xlt	53	ac%		180	200
Toothrow	xld	56	thorns		20	40	ac		40	60	ac%		160	220
Atma's Wail	xth	59	ac%		120	160
Black Hades	xul	61	att-demon		200	250	ac%		140	200	dmg-demon		30	60
Corpsemourn	xar	63	ac%		150	180
Que-Hegan's Wisdom	xtp	59	red-mag		6	10	ac%		140	160
Visceratuant	xuc	36	ac%		100	150
Moser's Blessed Circle	xml	39	ac%		180	220
Stormchaser	xrg	43	ac%		160	220
Tiamat's Rebuke	xit	46	res-all		25	35	ac%		140	200
Gerke's Sanctuary	xow	52	red-dmg		11	16	red-mag		14	18	ac%		180	240	res-all		20	30
Radament's Sphere	xts	58	ac%		160	200
Lidless Wall	xsh	49	mana-kill		3	5	ac%		80	130
Lance Guard	xpk	43	ac%		70	120
Venom Grip	xlg	37	ac		15	25	ac%		130	160
Gravepalm	xvg	39	dmg-undead		100	200	att-undead		100	200	ac%		140	180
Ghoulhide	xmg	44	manasteal		4	5	ac%		150	190
Lava Gout	xtg	50	ac%		150	200
Hellmouth	xhg	55	ac%		150	200
Infernostride	xlb	37	ac%		120	150	gold%		40	70
Waterwalk	xvb	40	ac%		180	210	hp		45	65
Silkweave	xmb	44	ac%		150	190
War Traveler	xtb	50	mag%		30	50	ac%		150	190	thorns		5	10
Gore Rider	xhb	55	ac%		160	200
String of Ears	zlb	37	red-mag		10	15	red-dmg%		10	15	lifesteal		6	8	ac%		150	180
Razortail	zvb	39	ac%		120	150
Gloom's Trap	zmb	45	ac%		120	150
Snowclash	ztb	49	ac%		130	170
Thundergod's Vigor	zhb	55	ac%		160	200
Harlequin Crest	uap	69
Veil of Steel	uhm	77
The Gladiator's Bane	utu	85	ac%		150	200	red-mag		15	20	red-dmg		15	20
Arkaine's Valor	upl	85	ac%		150	180	allskills		1	2	red-dmg		10	15
Blackoak Shield	uml	67	ac%		160	200
Stormshield	uit	77
Hellslayer	7bt	71
Messerschmidt's Reaver	7ga	75
Baranar's Star	7mt	70
Schaefer's Hammer	7wh	83	dmg%		100	130
The Cranium Basher	7gm	85	dmg%		200	240
Lightsabre	7cr	66	manasteal		5	7	dmg%		150	200
Doombringer	7b7	75	dmg%		180	250	lifesteal		5	7
The Grandfather	7gd	85	dmg%		150	250
Wizardspike	7dg	69
Stormspire	7wc	78	dmg%		150	250
Eaglehorn	6l7	77
Windforce	6lw	80	manasteal		6	8
Bul-Kathos' Wedding Band	rin	66	lifesteal		3	5
The Cat's Eye	amu	58
The Rising Sun	amu	73
Crescent Moon	amu	58	manasteal		11	15	lifesteal		3	6
Mara's Kaleidoscope	amu	80	res-all		20	30
Atma's Scarab	amu	60
Dwarf Star	rin	53	red-mag		12	15
Raven Frost	rin	53	dex		15	20	att		150	250
Highlord's Wrath	amu	73
Saracen's Chance	amu	55	res-all		15	25
Arreat's Face	baa	50	ac%		150	200	lifesteal		3	6
Homunculus	nea	50	ac%		150	200
Titan's Revenge	ama	50	dmg%		150	200	lifesteal		5	9
Lycander's Aim	am7	50	dmg%		150	200	manasteal		5	8
Lycander's Flank	am9	50	dmg%		150	200	lifesteal		5	9
The Oculus	oba	50
Herald of Zakarum	pa9	50	ac%		150	200
Bartuc's Cut-Throat	9tw	50	dmg%		150	200	lifesteal		5	9
Jalal's Mane	dra	50	ac%		150	200
The Scalper	9ta	65	dmg%		150	200	lifesteal		4	6
Bloodmoon	7sb	69	dmg%		210	260	lifesteal		10	15	heal-kill		7	13
Djinn Slayer	7sm	73	dmg%		190	240	dmg-demon		100	150	att-demon		200	300	abs-ltng		3	7	manasteal		3	6	sock		1	2
Deathbit	9tk	52	dmg%		130	180	att		200	450	lifesteal		7	9	manasteal		4	6
Warshrike	7bk	83	dmg%		200	250
Gut Siphon	6rx	79	dmg%		160	220	lifesteal		12	18
Razor's Edge	7ha	75	dmg%		175	225
Demon Limb	7sp	71	dmg%		180	230	lifesteal		7	13	res-fire		15	20
Steel Shade	ulm	70	ac%		100	130	abs-fire		5	11	manasteal		4	8	regen		10	18
Tomb Reaver	7pa	86	dmg%		200	280	dmg-undead		150	230	mag%		50	80	res-all		30	50	att-undead		250	350	heal-kill		10	14	sock		1	3
Death's Web	7gw	74	pierce-pois		40	50	heal-kill		7	12	mana-kill		7	12	skilltab	7	1	2
Nature's Peace	rin	77	red-dmg		7	11	res-pois		20	30
Azurewrath	7cr	87	dmg%		230	270	aura	Sanctuary	10	13	all-stats		5	10
Seraph's Hymn	amu	73	skilltab	11	1	2	dmg-demon		25	50	dmg-undead		25	50	att-demon		150	250	att-undead		150	250
Fleshripper	7kr	76	dmg%		200	300
Horizon's Tornado	7fl	72	dmg%		230	280
Stone Crusher	7wh	76	dmg%		280	320	str		20	30	dmg		10	30
Jade Talon	7wb	74	dmg%		190	240	manasteal		10	15	res-all		40	50	skilltab	19	1	2	skilltab	20	1	2
Shadow Dancer	uhb	79	ac%		70	100	dex		15	25	skilltab	19	1	2
Cerebus' Bite	drb	71	ac%		130	140	skilltab	16	2	4	lifesteal		7	10	att%		60	120	skill	feral rage	1	2
Tyrael's Might	uar	87	ac%		120	150	dmg-demon		50	100	res-all		20	30	str		20	30
Soul Drainer	umg	82	ac%		90	120	manasteal		4	7	lifesteal		4	7
Rune Master	72a	80	dmg%		220	270	sock		3	5
Death Cleaver	7wa	78	dmg%		230	280	heal-kill		6	9
Executioner's Justice	7gi	83	dmg%		240	290
Stoneraven	amd	72	dmg%		230	280	res-all		30	50	ac		400	600	skilltab	2	1	3
Leviathan	uld	73	ac%		170	200	ac		100	150	red-dmg%		15	25	str		40	50
Wisp Projector	rin	84	abs-ltng%		10	20	mag%		10	20
Gargoyle's Bite	7ts	78	dmg%		180	230	lifesteal		9	15
Lacerator	7b8	76	dmg%		150	210
Mang Song's Lesson	6ws	86	pierce-fire		7	15	pierce-ltng		7	15	pierce-cold		7	15
Viperfork	7br	79	dmg%		190	240	att		200	250	res-pois		30	50
Ethereal Edge	7ba	82	dmg%		150	180	abs-fire		10	12	dmg-demon		150	200	demon-heal		5	10	att		270	350
Demonhorn's Edge	bad	69	ac%		120	160	lifesteal		3	6	thorns		55	77	skilltab	12	1	3	skilltab	13	1	3	skilltab	14	1	3
The Reaper's Toll	7s8	83	dmg%		190	240	lifesteal		11	15
Spirit Keeper	drd	75	ac%		170	190	abs-ltng		9	14	res-fire		30	40	abs-cold%		15	25	dru		1	2
Hellrack	6hx	84	dmg%		180	230	att%		100	150
Alma Negra	pac	85	ac%		180	210	pal		1	2	red-mag		5	9	att%		40	75	dmg%		40	75
Darkforce Spawn	nef	72	ac%		140	180	skilltab	6	1	3	skilltab	7	1	3	skilltab	8	1	3
Widowmaker	6sw	73	dmg%		150	200	oskill	Guided Arrow	3	5
Blood Raven's Charge	amb	79	dmg%		180	230	att%		200	300	skilltab	0	2	4
Ghostflame	7bl	70	dmg%		190	240	manasteal		10	15
Shadow Killer	7cs	85	dmg%		170	220	mana-kill		10	15
Gimmershred	7ta	78	dmg%		160	210
Griffon's Eye	ci3	84	ac		100	200	extra-ltng		10	15	pierce-ltng		15	20
Windhammer	7m7	76	dmg%		180	230
Thunderstroke	amf	77	dmg%		150	200	skilltab	2	2	4
Demon's Arch	7s7	76	dmg%		160	210	lifesteal		6	12
Boneflame	nee	80	ac%		120	150	nec		2	3	res-all		20	30
Steel Pillar	7p7	77	dmg%		210	260	ac%		50	80
Nightwing's Veil	uhm	75	ac%		90	120	dex		10	20	abs-cold		5	9	extra-cold		8	15
Crown of Ages	urn	86	res-all		20	30	ac		100	150	red-dmg%		10	15	sock		1	2
Andariel's Visage	usk	85	ac%		100	150	str		25	30	lifesteal		8	10
Dragonscale	pae	84	ac%		170	200	abs-fire%		10	20	str		15	25
Steel Carapace	uul	74	ac%		190	220	red-dmg		9	14	res-cold		40	60	regen-mana		10	15
Medusa's Gaze	uow	84	ac%		150	180	lifesteal		5	9	res-cold		40	80
Ravenlore	dre	82	ac%		120	150	res-all		15	25	enr		20	30	pierce-fire		10	20
Boneshade	7bw	84	skill	Teeth	4	5	skill	Bone Armor	4	5	skill	Bone Spear	2	3	skill	Bone Spirit	1	2	skill	Bone Wall	2	3
Flamebellow	7gs	79	dmg%		170	240	abs-fire%		20	30	str		10	20	vit		5	10	oskill	Inferno	12	18
Death's Fathom	obf	81	extra-cold		15	30	res-fire		25	40	res-ltng		25	40
Wolfhowl	bac	85	ac%		120	150	skilltab	14	2	3	str		8	15	dex		8	15	vit		8	15	oskill	Wearwolf	3	6	oskill	Shape Shifting	3	6	oskill	Feral Rage	3	6
Spirit Ward	uts	76	ac%		130	180	abs-cold		6	11	res-all		30	40	block		20	30
Kira's Guardian	ci2	85	ac		50	120	res-all		50	70
Ormus' Robes	uui	83	ac		10	20	extra-fire		10	15	extra-cold		10	15	extra-ltng		10	15	regen-mana		10	15
Gheed's Fortune	cm3	70	mag%		20	40	gold%		80	160	cheap		10	15
Stormlash	7fl	86	dmg%		240	300	abs-ltng		3	9
Halaberd's Reign	bae	85	ac%		140	170	regen		15	23	skill	Battle Orders	1	2	skill	Battle Command	1	2
Spike Thorn	upk	78	ac%		120	150	red-dmg%		15	20
Dracul's Grasp	uvg	84	ac%		90	120	lifesteal		7	10	heal-kill		5	10	str		10	15
Frostwind	7ls	78	dmg%		180	230	abs-cold%		7	15	oskill	Arctic Blast	7	14
Templar's Might	uar	82	ac%		170	220	ac-miss		250	300	stam		40	50	str		10	15	vit		10	15	skilltab	10	1	2
Eschuta's Temper	obc	80	sor		1	3	extra-fire		10	20	extra-ltng		10	20	enr		20	30
Firelizard's Talons	7lw	75	dmg%		200	270	skilltab	20	1	3	res-fire		40	70	skill	Wake of Fire Sentry	1	2	skill	Inferno Sentry	1	2
Sandstorm Trek	uvb	72	ac%		140	170	res-pois		40	70	str		10	15	vit		10	15
Marrowwalk	umb	74	ac%		170	200	str		10	20	skill	Skeleton Mastery	1	2
Heaven's Light	7sc	69	dmg%		250	300	demon-heal		15	20	sock		1	2	pal		2	3
Arachnid Mesh	ulc	87	ac%		90	120
Nosferatu's Coil	uvc	68	lifesteal		5	7
Metalgrid	amu	85	ac		300	350	res-all		25	35	att		400	450
Verdungo's Hearty Cord	umc	71	ac%		90	140	vit		30	40	stam		100	120	red-dmg%		10	15	regen		10	13
Carrion Wind	rin	68	ac-miss		100	160	lifesteal		6	9
Giant Skull	uh9	73	ac		250	320	str		25	35	sock		1	2
Astreon's Iron Ward	7ws	68	dmg%		240	290	att%		150	200	red-dmg		4	7	dmg		40	85	skilltab	9	2	4
Annihilus	cm1	110	all-stats		10	20	res-all		10	20	addxp		5	10
Arioc's Needle	7sr	85	dmg%		180	230	allskills		2	4
Cranebeak	7mp	71	dmg%		240	300	mag%		20	50
Nord's Tenderizer	7cl	76	dmg%		270	330	freeze		2	4	att%		150	180	abs-cold%		5	15
Earth Shifter	7gm	77	dmg%		250	300
Wraith Flight	7gl	84	dmg%		150	190	lifesteal		9	13
Bonehew	7o7	72	dmg%		270	320
Ondal's Wisdom	6cs	74	enr		40	50	allskills		2	4	ac		450	550	red-mag		5	8
The Redeemer	7sc	80	dmg%		250	300	dmg-demon		200	250	skill	Redemption	2	4	skill	Holy Bolt	2	4	dmg		60	120
Head Hunter's Glory	ush	83	ac		320	420	ac-miss		300	350	res-pois		30	40	sock		1	3	res-fire		20	30	heal-kill		5	7
Steelrend	uhg	78	ac		170	210	str		15	20	dmg%		30	60
Rainbow Facet (ltng/death)	jew	85	pierce-ltng		3	5	extra-ltng		3	5
Rainbow Facet (cold/death)	jew	85	pierce-cold		3	5	extra-cold		3	5
Rainbow Facet (fire/death)	jew	85	pierce-fire		3	5	extra-fire		3	5
Rainbow Facet (pois/death)	jew	85	pierce-pois		3	5	extra-pois		3	5
Rainbow Facet (ltng/level)	jew	85	pierce-ltng		3	5	extra-ltng		3	5
Rainbow Facet (cold/level)	jew	85	pierce-cold		3	5	extra-cold		3	5
Rainbow Facet (fire/level)	jew	85	pierce-fire		3	5	extra-fire		3	5
Rainbow Facet (pois/level)	jew	85	pierce-pois		3	5	extra-pois		3	5
Hellfire Torch	cm2	110	all-stats		10	20	res-all		10	20`

export const uniqueItems:Map<string,UniqueItem> = new Map()

uniqueItemsTsv.split(/\r?\n/).forEach(line => { let uniqueItem = new UniqueItem(line); uniqueItems.set(uniqueItem.name, uniqueItem) });

