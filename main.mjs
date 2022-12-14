import express from 'express'
import controller_handle_form_pagrindinis from './controllers/controller_handle_form_pagrindinis.mjs'
import controller_show_view_pagrindinis from './controllers/controller_show_view_pagrindinis.mjs'
import controller_handle_form_iveskite_savo_tel_nr from './controllers/controller_handle_form_iveskite_savo_tel_nr.mjs'
import controller_handle_form_iveskite_zinuteje_gauta_koda from './controllers/controller_handle_form_iveskite_zinuteje_gauta_koda.mjs'

const express_1 = express()

//
express_1.use(express.urlencoded())
//endpoints

express_1.get("/", controller_show_view_pagrindinis)
express_1.post("/pagrindinis", controller_handle_form_pagrindinis )
express_1.post("/iveskite_savo_tel_nr", controller_handle_form_iveskite_savo_tel_nr)
express_1.post("/iveskite_zinuteje_gauta_koda", controller_handle_form_iveskite_zinuteje_gauta_koda )

express_1.listen(80)