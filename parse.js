//http://ensabahnur.free.fr/BastonNew/

//Normals
var result = [];
$("#fd_table").find("tbody tr").each(function() {
    $this = $(this);
    $tds = $this.find("td");
    var a = $($tds[14]).html().split("/")
    var b = $($tds[15]).html().split("/")
    result.push({
        "Name": $($tds[1]).html(),
        "Common_name": "",
        "Startup": $($tds[2]).html(),
        "Hit": $($tds[3]).html(),
        "Recovery": $($tds[4]).html(),
        "Block_advantage": $($tds[5]).html(),
        "Hit_advantage": $($tds[6]).html(),
        "Crouch_hit_advantage": $($tds[7]).html(),
        "Cancel": {
            "Super_art": false,
            "Special": false,
            "Self": false,
            "Chain": false,
            "Dash": false,
            "High_jump": false
        },
        "Parry": {
            "High": true,
            "Low": true
        },
        "Kara_range": $($tds[10]).html(),
        "Throw_range": $($tds[11]).html(),
        "Damage": $($($tds[12]).find("span")).html(),
        "Stun": $($($tds[13]).find("span")).html(),
        "Bar_gain_attacker": {
            "Whiff": a[0].trim(),
            "Hit": a[1].trim(),
            "Block": a[2].trim()
        },
        "Bar_gain_opponent": {
            "Hit": b[0].trim(),
            "Block": b[1].trim()
        }

    });
});
console.log(JSON.stringify(result));