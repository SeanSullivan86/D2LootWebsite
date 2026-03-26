
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
