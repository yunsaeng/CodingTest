function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = [];
    let bridgeWeight = 0;
    
    while(truck_weights.length || bridge.length) {
        time++;
        
        if(bridge.length && bridge[0].endTime === time) bridgeWeight -= bridge.shift().weight;
        
        if(truck_weights.length) {
            if(bridgeWeight + truck_weights[0] <= weight && bridge.length < bridge_length) {
                const truck = truck_weights.shift();
                bridgeWeight += truck;
                bridge.push({weight: truck, endTime: time + bridge_length});
            }
        }
    }
    
    return time;
}