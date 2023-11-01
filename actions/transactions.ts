"use server"


import axios from 'axios'



 const backendUrl = 'https://fe-task-api.mainstack.io'


export async function getTransactions() {

    const {data} = await axios.get(`${backendUrl}/transactions`)

    return data
}

export async function getWallet() {

    const {data} = await axios.get(`${backendUrl}/wallet`)

    return data
}

export async function getUser() {

    const {data} = await axios.get(`${backendUrl}/user`)

    return data
}