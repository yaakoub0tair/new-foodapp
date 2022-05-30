// what will happen when the request fetched
// had lfunction fiha dakchi lighadi ydar mni ghadi tji response( mni ghadi yrd 3lik server )
let dothat = function () {
    // hana this ktrj3 3la XMLHttpRequest()
    // ila lahdti rej3lna wahd object smyto XMLHTTPRequest whowa hdak dis
    // had xmlhttprequest fih bzaf dyal attributes whda mnhom hiya responseText
    // ila chft had lmra rj3la response liftalna server whda howa dwr dyal responseText
    // kifach a afficher had response text??
    // affichitha b console.log()
    // ana kifach an affichiha f site 
    // awal hja khansi n3rf element lighadi naffiche fih 

    let f = document.getElementById("first_name");
    //let l = document.getElementById("last_name");
    // had lcode liktbt tymchi l document
    // kifma ktchof had docuemnt how li kypointi 3la lfichie kaml wla lcode caml wla lapge kmla
    // apres getelementById hadi kt9lb 3la lemelenmt li3ndo lid [iddyalelement] flpage kmla
    // sory ana drt class machi element
    // lihoma  dak l [p]
    // db ila chfi rah wslna l element libaghin nktbo fih
    // b9a kifach ghadi nktbo fih
    // kyn bzaf dyal toro9
    // awal hja kant innerHTML whadi ktkhma mni ktkon baghi tktb chi hja fiha l html wbaghiha tban flpage
    // mnb3d innerText hadi ila konti katb html 
    // bhal hka
    // el.innerHTML = "<mark>html</mark>"
    // rah mghadich tbyno kahtml mais ka text
    // wlkhra hiya textContent whadi bhal innerText mais kynso biha hit ttkhdm m3a ga3 browsers
    // Tip: il lahdti <mark>html</mark> mkynach flapage
    // mais ktafficha !!
    // 3lach ?
    // hitach js mktbdlch f fl fichier mais ktbdl f la page awal f [document] mni kadir refresh tychi kolchi
    //ok ha ana 3reft njib les donnes dyal les plats w 3raft n affichihom 3la dak chkel , wach possible n afstfecté kol donné bohdo bach n3ref n7eto f site web ??
    // wah mtlan les plates aykon 3nd fichier dyal les plates atkhdm code bhal hda wfpage clients atbdl flcode ??
    // athtaj tbdl url dyal reque
    // hnta mn responsetext kyn fiha wahd attributes [first_name] kn3yto 3lih b dot notation
    // mais had lcode madich ykhm 3lach ??
    // hit hna 3ndna bzaf dyal les clients
    //??
    // f.textContent = JSON.parse(this.responseText)
    // db n9do naffichow smiya bohdal
    let json = JSON.parse(this.responseText)




    let a = document.getElementById('category-card')

    for (var i = 0; i < json.length; i++) {
        if (i != 0) {
            let r = a.cloneNode(true)

            r.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText = json[i].label

            a.parentElement.appendChild(r)
            continue
        }

        a.childNodes[i+1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText = json[i].label

    }

}

// initialize the xmlhttprequest object
// hnya 3ad bdina lkhdma y3ni ila chft rah declarit dothat 9bl mnbda ndir request mkynch fr9 ghir bach ktkon
// chwiya logic
let xhr = new XMLHttpRequest()


// execute dothat when the request loaded
// hna jina w3ytna 3la dik function
xhr.onload = dothat;

// open a new request
// hna jbt ghir clients li lid dyalo 1
//hadchi mrowen  darajat hiya mafehmat walou hhh
//9atlek ta tsaliw projet w werweh liya hhh ana z3ma han ansaliwh

xhr.open("GET", "https://ojpro-iresto.herokuapp.com/api/categories");

// send the request 

xhr.send();




