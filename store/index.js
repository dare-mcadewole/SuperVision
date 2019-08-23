
export const state = () => ({
    appName: 'SuperVision',
    zone: 1,
    isConnected: false,
    sensorStates: {
        PIR: false,
        DOPPLER: true,
        INTRUSION: true
    },
    controls: {
        ALARM_CONTROL: false,
        PROTECT_ZONE: true,
        OVERRIDE: true,
        AUTO_PROTECT: false
    }
})

export const getters = {
    appName: (state) => state.appName,
    isConnected: (state) => state.isConnected,
    zone: state => state.zone,
    controls: state => state.controls,

    PIR: state => state.sensorStates.PIR,
    DOPPLER: state => state.sensorStates.DOPPLER,
    INTRUSION: state => state.sensorStates.INTRUSION,

    ALARM_CONTROL: state => state.controls.ALARM_CONTROL,
    PROTECT_ZONE: state => state.controls.PROTECT_ZONE,
    OVERRIDE: state => state.controls.OVERRIDE,
    AUTO_PROTECT: state => state.controls.AUTO_PROTECT
}

export const actions = {
    setIsConnected ({ commit }, status) {
        commit('SET_IS_CONNECTED', status)
    },
    setZone ({ commit }, zone) {
        commit('SET_ZONE', zone)
    },
    
    setPIR ({ commit }, value) {
        commit('SET_PIR', value)
    },
    setDOPPLER ({ commit }, value) {
        commit('SET_DOPPLER', value)
    },
    setINTRUSION ({ commit }, value) {
        commit('SET_INTRUSION', value)
    },
    
    setControl ({ commit }, payload) {
        commit('SET_CONTROL', payload)
    }
}

export const mutations = {
    SET_IS_CONNECTED (state, status) {
        state.isConnected = status
    },
    SET_ZONE (state, zone) {
        state.zone = zone
    },

    SET_PIR (state, value) {
        state.sensorStates.PIR = value
    },
    SET_DOPPLER (state, value) {
        state.sensorStates.DOPPLER = value
    },
    SET_INTRUSION (state, value) {
        state.sensorStates.INTRUSION = value
    },

    SET_CONTROL (state, payload) {
        state.controls[payload.control] = payload.state
    }
}
