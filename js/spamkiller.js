var spammers = ["Dim_HW97K","danilidi_ru","LutsenkoYuriy","Orest_Ts","heruvimrus","TarasSiromsky","horoshiyblog","korshinsky","systerpret_feed","ca_puccino","milanitto","NastyshkaNovich","tsygan48","Gurik58","ArianJersey","New_medicine","NavalnyHusband","kseniya_herman","KeyExitus","happy_jeww","salty__1970","ludovik_xv","ivan_505","Politculture","VingDemon","dimauspeh","evenementI","gaytsukann","Romtsia","fcco1936","my8thoughts","rotozeev","lishayapokoya","Seot0p","nastyapoo","sachashtorm","aolshanskiy","rusbrilliant","DerkachJ","Dominic87312668","solomijasweet","StepanBc","homosharik_says","TyorkinVassya","Die__my_darling","IRINA19942804","Dima_Danilov_79","semenenkopavel","gorunuc","MID_RF","123ben1234","demanad1","DedMazarchuk","pelik911","54_zah","Yuri_Lutsenko","Alexkovalchuk2","sovenko1","RudkAntony","Iurchenkoo","E6aPbTeppopucT","neutrinow","fantastiics","FTYSp","vladkovskyi","Evgen257","dlogattai","povnatorba","MitroffaN666","Tractorcoff","ivanenkovigor","rzhev","ruslanniko","mishabizun","luckyserg","itgadjet","dima55","KateMaclure","thrilswag","natasha3378","EdikCom","zetx1971","aka_B_M","serogoz","AspidSolncev","dimonq1w","rusrusdada","Irina_short","leonspeak","kostigoff","alkonostbird","nemykolaveresen","K0chetkov","A_Rainik","SocialnyiNarkom","myvotefactor","sazam","markuzlong","teeodorix","ano_lif","azbukywedy_","huntielle","zav21","korobkov","valeriygordienk","tor_simon","Dmitry_Official","nmuhammedov","AlligatorUm","kradio5","rozhko_er","markoo331","RuXarchuk","Sandra_Novikova","kovalyovsv","korabliks","v_votchitsev","alshenia","dkhhvorov","polit_sru","Alexsverb","Guk_Julia","16_luisa16","Valeriya_Zarya","Andreyko_z","nadegdo","KniazNevskij","andrejkina89","natalka119","Parnisha1","Sana778","Split_Cat","zerkalozp","Slava_Tihonskiy","Dimas_writter","alhramcov","dandy_player","10names","AnastasiaTrust","sitillia","kahoska","sasha4ko","viksimon1","ApostolGeorgeUA","amasonor"];

document.addEventListener("DOMSubtreeModified", function(event){
	var tweets = document.getElementsByClassName('tweet');

	for (var i=0;i<tweets.length;i++)
	{ 
		var tweet = tweets[i];
		if (spammers.indexOf(tweet.attributes['data-screen-name'].value) != -1)
		{
			tweet.style.backgroundColor="red";
		}
	}
});