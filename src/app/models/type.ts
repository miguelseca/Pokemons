export interface Type {
    name: string;  
    damage_relations: {
        double_damage_from: {
            name: string;
        },
        double_damage_to: {
            name: string;
        },
        half_damage_from: {
            name: string;
        },
        half_damage_to: {
            name: string;
        },
        no_damage_from: {
            name: string;
        },
        no_damage_to: {
            name: string;
        }
    }
}
