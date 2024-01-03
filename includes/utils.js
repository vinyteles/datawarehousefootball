function fix_country(country_src, country_dest){
    return "(CASE " + 
    "WHEN " + country_src + " IS NULL THEN "+
    country_dest + 
    " ELSE " + country_src + " END)"
}

function find(type, key, attr, date, database_dest, database_src){
    return "(SELECT " +
    type + "(x." + attr + ")" +
    " FROM football_dw_inf2." + database_src + " x" +
    " WHERE" + " x." + "date <= " + 
    database_dest + "." + date +
    " AND "+ "x." + key +
    " = " + database_dest + "." + key + ")"
}

function case_is_null(attr){
    return "(CASE " +
    "WHEN " + attr + " IS NULL THEN 0 " + 
    "ELSE " + attr + " END)"
}

module.exports = {
    fix_country,
    find,
    case_is_null
}