// http://ensabahnur.free.fr/BastonNew/

// Normals
var result = [];
$("#fd_table").find("tbody tr").each(function () {
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
            "Super_art": $($tds[8]).find("div[title='Super Art cancellable']").hasClass("BcancelBit_7"),
            "Special": $($tds[8]).find("div[title='Special cancellable']").hasClass("BcancelBit_6"),
            "Self": $($tds[8]).find("div[title='Self cancellable']").hasClass("BcancelBit_5"),
            "Chain": $($tds[8]).find("div[title='Normal/Chain cancellable']").hasClass("BcancelBit_3"),
            "Dash": $($tds[8]).find("div[title='Dash cancellable']").hasClass("BcancelBit_2"),
            "High_jump": $($tds[8]).find("div[title='Superjump cancellable']").hasClass("BcancelBit_1")
        },
        "Parry": {
            "High": $($tds[9]).html().includes("H"),
            "Low": $($tds[9]).html().includes("L")
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

// Specials
var result = [];
$("#fd_table").find("tbody tr").each(function () {
    $this = $(this);
    $tds = $this.find("td");
    var a = $($tds[12]).html().split("/")
    var b = $($tds[13]).html().split("/")
    result.push({
        "Name": $($tds[1]).html(),
        "Common_name": "",
        "Startup": $($tds[3]).html(),
        "Hit": $($tds[4]).html(),
        "Recovery": $($tds[5]).html(),
        "Block_advantage": $($tds[6]).html(),
        "Hit_advantage": "-",
        "Crouch_hit_advantage": "-",
        "Cancel": {
            "Super_art": $($tds[7]).find("div[title='Super Art cancellable']").hasClass("BcancelBit_7"),
            "Special": $($tds[7]).find("div[title='Special cancellable']").hasClass("BcancelBit_6"),
            "Self": $($tds[7]).find("div[title='Self cancellable']").hasClass("BcancelBit_5"),
            "Chain": $($tds[7]).find("div[title='Normal/Chain cancellable']").hasClass("BcancelBit_3"),
            "Dash": $($tds[7]).find("div[title='Dash cancellable']").hasClass("BcancelBit_2"),
            "High_jump": $($tds[7]).find("div[title='Superjump cancellable']").hasClass("BcancelBit_1")
        },
        "Parry": {
            "High": $($tds[8]).html().includes("H"),
            "Low": $($tds[8]).html().includes("L")
        },
        "Kara_range": "-",
        "Throw_range": $($tds[9]).html(),
        "Damage": $($($tds[10]).find("span")).html(),
        "Stun": $($($tds[11]).find("span")).html(),
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

// Super Arts
var result = [];
$("#fd_table").find("tbody tr").each(function () {
    $this = $(this);
    $tds = $this.find("td");
    result.push({
        "Name": $($tds[1]).html(),
        "Common_name": "",
        "Startup": $($tds[3]).html(),
        "Hit": $($tds[4]).html(),
        "Recovery": $($tds[5]).html(),
        "Block_advantage": $($tds[6]).html(),
        "Hit_advantage": "-",
        "Crouch_hit_advantage": "-",
        "Cancel": {
            "Super_art": $($tds[7]).find("div[title='Super Art cancellable']").hasClass("BcancelBit_7"),
            "Special": $($tds[7]).find("div[title='Special cancellable']").hasClass("BcancelBit_6"),
            "Self": $($tds[7]).find("div[title='Self cancellable']").hasClass("BcancelBit_5"),
            "Chain": $($tds[7]).find("div[title='Normal/Chain cancellable']").hasClass("BcancelBit_3"),
            "Dash": $($tds[7]).find("div[title='Dash cancellable']").hasClass("BcancelBit_2"),
            "High_jump": $($tds[7]).find("div[title='Superjump cancellable']").hasClass("BcancelBit_1")
        },
        "Parry": {
            "High": $($tds[8]).html().includes("H"),
            "Low": $($tds[8]).html().includes("L")
        },
        "Kara_range": "-",
        "Throw_range": $($tds[9]).html(),
        "Damage": $($($tds[10]).find("span")).html(),
        "Stun": $($($tds[11]).find("span")).html()
    });
});
console.log(JSON.stringify(result));