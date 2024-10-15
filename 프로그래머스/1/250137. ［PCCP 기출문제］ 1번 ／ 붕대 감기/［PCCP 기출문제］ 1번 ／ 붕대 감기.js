function solution(bandage, health, attacks) {
    const heal_time = bandage[0];
    const heal = bandage[1];
    const heal_plus = bandage[2];
    let pos_health = health;
    let prev_time = 0;
    
    for(let i=0; i < attacks.length; i++) {
        const attack_time = attacks[i][0];
        const attack_damage = attacks[i][1];
        let res_time = attack_time - prev_time - 1;
        
        if(pos_health < health) {
            while(!(pos_health === health || res_time === 0)) {
                if(res_time >= heal_time) {
                    pos_health += heal * heal_time + heal_plus;
                    res_time -= heal_time;
                } else {
                    pos_health += heal * res_time;
                    res_time = 0;
                }
                
                if(pos_health >= health) {
                    pos_health = health;
                }
            }
        }
        
        pos_health -= attack_damage;
            
        prev_time = attack_time;
        
        if(pos_health <= 0) {
            break;
        }
    }
    
    if(pos_health <= 0) {
        pos_health = -1;
    }
    
    return pos_health;
}