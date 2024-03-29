import { CbamInput } from '@/excel-api'
import { CbamOutput } from '../cbam'

export const res_i: CbamInput = {
	a: {
		reporting_period: {
			start: '2024-01-01',
			end: '2024-12-31',
		},
		about_the_installation: {
			name_of_the_installation: '김해공장',
			name_of_the_installation_english:
				'factory Gimhae',
			street_number:
				'158-7, Golden root-ro, Juchon-myeon, Gimhae-si, Gyeongsangnam-do, Republic of Korea',
			economic_activity: '$58,000,00',
			post_code: 50969,
			po_box: 'Gimhae',
			city: 'Seoul',
			country: 'Korea, Republic of',
			unlocode: 'KR SEL',
			coordinates_latitude: 35.2207,
			coordinates_longitude: 128.8264,
			name_of_the_authorized_representative:
				'lca_manager',
			email: 'hello@example.com',
			telephone: '010-1234-5678',
		},
		verifier_of_the_report: {
			company_name: 'Authorization Company',
			street_number:
				'158-7, Golden root-ro, Juchon-myeon',
			city: 'Gimhae-si',
			postcode: '50584',
			country: 'Republic of Korea',
			name: 'John Doe',
			email_address: 'email@example.com',
			telephone_number: '010-1234-5678',
			fax: '442348',
			accreditation_member_state: 'Representative',
			name_of_the_national_accreditation_body:
				'J.Y Yoman',
			registration_number_issued_by_the_accreditation_body:
				'3388543',
		},
		aggregated_goods_categories_and_relevant_production_processes:
			{
				list_of_aggregated_goods_categories: [
					{
						agc: 'Cement',
					},
					{
						agc: 'Crude steel',
						route1: 'Basic oxygen steelmaking',
						route2: 'Electric arc furnace',
					},
					{
						agc: 'Ammonia',
						route1: 'Haber-Bosch process with steam reforming of natural gas or biogas',
						route2: 'Haber-Bosch process with gasification of coal or other fuels',
					},
					{
						agc: 'Unwrought aluminium',
						route1: 'Primary (electrolytic) smelting',
						route2: 'Secondary melting (recycling)',
					},
					{
						agc: 'Cement clinker',
					},
					{
						agc: 'Pig iron',
						route1: 'Blase furnace route',
						route2: 'Smelting reduction',
					},
				],
				relevant_production_processes: [
					{
						production_process: 'Cement',
						included_goods_categories_1:
							'Cement clinker',
						name: '시멘트제조공정',
					},
					{
						production_process: 'Crude steel',
						included_goods_categories_1:
							'Pig iron',
						name: '선철제조공정',
					},
					{
						production_process: 'Ammonia',
						included_goods_categories_1:
							'Only direct production',
						name: '암모니아제조공정',
					},
					{
						production_process:
							'Unwrought aluminium',
						included_goods_categories_1:
							'Only direct production',
						name: '알루미늄제조공정',
					},
				],
			},
		purchased_precursors: [
			{
				production_process: 'Cement clinker',
				country_code: 'KR',
				name: '클링커 전구체',
			},
			{
				production_process: 'Pig iron',
				country_code: 'KR',
				route1: 'Blase furnace route',
				route2: 'Smelting reduction',
				name: '철광석 전구체',
			},
		],
	},
	b: {
		source_streams: [
			{
				method: 'Combustion',
				name: '연소배관 1',
				ad: 46833,
				ad_unit: 't',
				ncv: 4,
				ef: 0.5,
				ef_unit: 'tCO2/t',
				oxf: 43.3,
				bioc: 0,
			},
			{
				method: 'Combustion',
				name: '물',
				ad: 4384,
				ad_unit: 't',
				ncv: 6.43,
				ef: 0.3,
				ef_unit: 'tCO2/t',
				oxf: 45.3,
				bioc: 0,
			},
			{
				method: 'Combustion',
				name: '유기연료',
				ad: 6556,
				ad_unit: 'kNm3',
				ncv: 4.45,
				ef: 0.64,
				ef_unit: 'tCO2/kNm3',
				oxf: 1.2,
				bioc: 23.2,
			},
			{
				method: 'Combustion',
				name: '연소배관 2',
				ad: 4698,
				ad_unit: 't',
				ncv: 5.5,
				ef: 0.33,
				ef_unit: 'tCO2/t',
				oxf: 7.5,
				bioc: 0,
			},
			{
				method: 'Combustion',
				name: '연소배관 3',
				ad: 5656,
				ad_unit: 't',
				ncv: 4.3,
				ef: 0.46,
				ef_unit: 'tCO2/t',
				oxf: 0,
				bioc: 0,
			},
			{
				method: 'Combustion',
				name: '중수',
				ad: 654,
				ad_unit: 't',
				ncv: 3.5,
				ef: 0.12,
				ef_unit: 'tCO2/t',
				oxf: 9.88,
				bioc: 0,
			},
			{
				method: 'Process emissions',
				name: '화석연료',
				ad: 767,
				ad_unit: 'kNm3',
				ncv: 2.3,
				ef: 0.56,
				ef_unit: 'tCO2/kNm3',
				convf: 2.4,
				bioc: 2.34,
			},
			{
				method: 'Process emissions',
				name: '공정배관 1',
				ad: 372794,
				ad_unit: 't',
				ncv: 7.11,
				ef: 0.31,
				ef_unit: 'tCO2/t',
				convf: 2.11,
				bioc: 34.2,
			},
			{
				method: 'Process emissions',
				name: '공정배관 2',
				ad: 5365,
				ad_unit: 't',
				ncv: 6.22,
				ef: 0.45,
				ef_unit: 'tCO2/t',
				convf: 77.4,
				bioc: 0,
			},
			{
				method: 'Mass Balance',
				name: '시맨트',
				ad: 556,
				ad_unit: 't',
				ncv: 74,
				carbon_content: '0.22',
				bioc: 45.3,
			},
		],
		pfc_emissions: [
			{
				method: 'Slope method',
				type_of_anode: '슬로프 1',
				ad: 345.34,
				a_frequency: 300,
				a_duration: 5,
				a_cf4: 0.34,
				b_aeo: 19,
				b_ce: 66,
				b_ovc: 0,
				c2f6: 0.14,
				collection_efficiency: 56,
			},
			{
				method: 'Slope method',
				type_of_anode: '냉방연료 1',
				ad: 35877,
				a_frequency: 233,
				a_duration: 33,
				a_cf4: 343,
				b_aeo: 0,
				b_ce: 0.1,
				b_ovc: 0.23,
				c2f6: 0.89,
				collection_efficiency: 19,
			},
		],
		emissions_sources: [
			{
				name: '용광로',
				type_of_ghg: 'CO2',
				biomass_fraction: 22,
				hourly_ghg_conc_average: 53.33,
				hours_operating: 3,
				flue_gas: 324,
			},
		],
	},
	c: {
		fuel_balance: {
			total_fuel_input: 0,
			direct_fuel_for_cbam_goods: 0,
			fuel_for_electricity: 56,
			direct_fuel_for_non_cbam_goods: 0,
		},
		greenhouse_gas_emissions_balance: {
			ghg_balance_by_type_of_ghg: {
				total_co2_emissions: 22,
				biomass_emissions: 0,
				total_n2o_emissions: 0,
				total_pfc_emissions: 0,
				total_direct_emissions: 0,
				total_indirect_emissions: 127556,
			},
			information_on_the_data_quality_and_quality_assurance:
				{
					general_information_on_data_quality:
						'Mostly measurements & analyses',
					information_on_quality_assurance:
						'Third-party verification',
				},
		},
	},
	d: [
		{
			total_production_level: [4434],
			production_for_the_market: 3225,
			consumed_in_other_production_processes: [
				10, 353, 13,
			],
			consumed_in_non_cbam_goods: 833,
			calculation_of_the_attributed_emissions: {
				direm: 757,
				measurable_heat: {
					applicable: true,
					imported: {
						amount: 32,
						ef: 3,
					},
					exported: {
						amount: 3,
						ef: 45.6,
					},
				},
				waste_gases: {
					applicable: true,
					imported: 6,
					exported: 23,
				},
				indirect_emissions_from_electricity_consumption:
					{
						amount: 23,
						ef: 4.566,
						source: 'D.2.4',
					},
				electricity_exported_from_the_production_process:
					{
						amount: 4,
						ef: 9.384,
					},
			},
		},
		{
			total_production_level: [20, 453, 5454, 343],
			production_for_the_market: 5000,
			consumed_in_other_production_processes: [
				53, 1000, 183,
			],
			consumed_in_non_cbam_goods: 34,
			calculation_of_the_attributed_emissions: {
				direm: 200,
				measurable_heat: {
					applicable: true,
					imported: {
						amount: 34,
						ef: 5.34,
					},
					exported: {
						amount: 75,
						ef: 45.54,
					},
				},
				waste_gases: {
					applicable: true,
					imported: 36,
					exported: 6,
				},
				indirect_emissions_from_electricity_consumption:
					{
						amount: 45,
						ef: 45.3,
						source: 'Mix',
					},
				electricity_exported_from_the_production_process:
					{
						amount: 45,
						ef: 34.5,
					},
			},
		},
		{
			total_production_level: [54, 5454, 86, 474],
			production_for_the_market: 4900,
			consumed_in_other_production_processes: [
				334, 264, 568,
			],
			consumed_in_non_cbam_goods: 2,
			calculation_of_the_attributed_emissions: {
				direm: 4898,
				measurable_heat: {
					applicable: true,
					imported: {
						amount: 7,
						ef: 4.5,
					},
					exported: {
						amount: 4,
						ef: 33.5,
					},
				},
				waste_gases: {
					applicable: true,
					imported: 34,
					exported: 655,
				},
				indirect_emissions_from_electricity_consumption:
					{
						amount: 553,
						ef: 34.4,
						source: 'Mix',
					},
				electricity_exported_from_the_production_process:
					{
						amount: 5,
						ef: 34.3,
					},
			},
		},
		{
			total_production_level: [200, 30, 2],
			production_for_the_market: 232,
			consumed_in_other_production_processes: [],
			consumed_in_non_cbam_goods: 833,
			calculation_of_the_attributed_emissions: {
				direm: 34,
				measurable_heat: {
					applicable: false,
				},
				waste_gases: {
					applicable: true,
					imported: 23,
					exported: 8,
				},
				indirect_emissions_from_electricity_consumption:
					{
						amount: 242,
						ef: 232,
						source: 'Mix',
					},
				electricity_exported_from_the_production_process:
					{
						amount: 3,
						ef: 23,
					},
			},
		},
	],
	e: [
		{
			total_purchased_levels: [358],
			consumed_in_production_processes: [
				76, 200, 37, 45,
			],
			specific_embedded_emissions: {
				direct: {
					value: 11.07,
					source: 'Measured',
				},
				indirect: {
					value: 2,
					source: 'D.2.4',
				},
			},
		},
		{
			total_purchased_levels: [600, 57],
			consumed_in_production_processes: [
				344, 219, 38, 56,
			],
			specific_embedded_emissions: {
				direct: {
					value: 36.55,
					source: 'Measured',
				},
				indirect: {
					value: 22.1,
					source: 'Mix',
				},
			},
		},
	],
	f: {},
	s_production: [
		{
			production_process: '시멘트제조공정',
			cn_code: 25232100,
			product_name: '가공 시멘트',
			clinker_factor: 56,
			form_of_carbon_price:
				'Emissions Trading System',
			share_of_total_embedded_emissions_covered_by_the_carbon_price: 34,
			currency: 'USD',
			carbon_price: 55,
			form_of_rebate: 'Free allocation',
			share_of_total_embedded_emissions_covered_by_the_rebate: 6,
			amount_of_rebate: 559,
		},
		{
			production_process: '선철제조공정',
			cn_code: 7206,
			product_name: '선철',
			the_main_reducing_agent_of_the_precursor:
				'Coal or coke',
			p_mn: 45,
			p_cr: 11,
			p_nr: 0,
			p_other_alloys: 0,
			t_scrap_per_t_steel: 4,
			p_pre_consumer_scrap: 3.3,
			form_of_carbon_price:
				'Emissions Trading System',
			share_of_total_embedded_emissions_covered_by_the_carbon_price: 34,
			currency: 'USD',
			carbon_price: 97,
			form_of_rebate: 'Financial compensation',
			share_of_total_embedded_emissions_covered_by_the_rebate: 44,
			amount_of_rebate: 338.6,
		},
		{
			production_process: '암모니아제조공정',
			cn_code: 2814,
			product_name: '화학암모니아',
			concentration: 0,
			form_of_carbon_price: 'Tex or levy',
			share_of_total_embedded_emissions_covered_by_the_carbon_price: 56,
			currency: 'USD',
			carbon_price: 43.5,
			form_of_rebate: 'Tax deduction',
			share_of_total_embedded_emissions_covered_by_the_rebate: 84,
			amount_of_rebate: 36,
		},
		{
			production_process: '알루미늄제조공정',
			cn_code: 7601,
			product_name: '샤크안테나 알루미늄 용질',
			p_pre_consumer_scrap: 0,
			t_scrap_per_t_aluminium: 11.55,
			p_non_aluminium_elements: 3,
			form_of_carbon_price: 'Combination',
			share_of_total_embedded_emissions_covered_by_the_carbon_price: 34,
			currency: 'USD',
			carbon_price: 228,
			form_of_rebate: 'Combination',
			share_of_total_embedded_emissions_covered_by_the_rebate: 79,
			amount_of_rebate: 44,
		},
	],
}

export const res_o: CbamOutput = {
	b: {
		source_streams: [
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 23417,
				co2e_bio: 0,
				content_fossil: 187.3,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 1315,
				co2e_bio: 0,
				content_fossil: 28.2,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/kNm3',
				co2e_fossil: 3222,
				co2e_bio: 973,
				content_fossil: 22.4,
				content_bio: 6.8,
			},
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 1550,
				co2e_bio: 0,
				content_fossil: 25.8,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 2602,
				co2e_bio: 0,
				content_fossil: 24.3,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 78,
				co2e_bio: 0,
				content_fossil: 2.3,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/kNm3',
				co2e_fossil: 10,
				co2e_bio: 0,
				content_fossil: 1.7,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 1604,
				co2e_bio: 834,
				content_fossil: 1744.1,
				content_bio: 906.6,
			},
			{
				ncv_unit: 'GJ/t',
				co2e_fossil: 1869,
				co2e_bio: 0,
				content_fossil: 33.4,
				content_bio: 0,
			},
			{
				ncv_unit: 'GJ/t',
				carbon_unit: 'tC/t',
				co2e_fossil: 245,
				co2e_bio: 203,
				content_fossil: 22.5,
				content_bio: 18.6,
			},
		],
	},
	s_processes: {
		greenhouse_gas_emissions_balance_and_specific_embedded_emissions:
			{
				ghg_emissions_balance_of_the_installation_and_all_production_processes:
					[
						{
							production_process:
								'시멘트제조공정',
							agc: 'Cement',
							direm: 757,
							heat: -41,
							wg: -524,
							direct: 192,
							indirect: 105,
						},
						{
							production_process:
								'선철제조공정',
							agc: 'Crude steel',
							direm: 200,
							heat: -3234,
							wg: 1795,
							direct: -1239,
							indirect: 2039,
						},
						{
							production_process:
								'암모니아제조공정',
							agc: 'Ammonia',
							direm: 4898,
							heat: -103,
							wg: -22602,
							direct: -17806,
							indirect: 19023,
						},
						{
							production_process:
								'알루미늄제조공정',
							agc: 'Unwrought aluminium',
							direm: 34,
							heat: 0,
							wg: 991,
							direct: 1025,
							indirect: 56144,
						},
					],
			},
	},
}
