window.rtc = window.rtc || {};
window.rtc.strings = {
	get: function( container, key ) {
		return rtc.strings[container][key];
	},
	session: {
		preparedFor: 'Preparada para',
		from: 'de'
	},
	mailto: {
		mailBody: "Hola {{firstname}},%0A%0A{{message}}%0A%0AQuería compartir una presentación de video personalizada construido específicamente para usted. Haga clic en el enlace de abajo para obtener más información:%0A%0A{{link}}%0A%0A{{fullname}}",
		mailSubject: "¿Has visto a este servicio de video personalizado?",
		ifSendDirectlyFailed: "Si no ha podido enviar el correo electrónico por favor copie y pegue el contenido de abajo en tu cliente de correo electrónico:"
	},
	mailtoTooltips: {
		sendDirectly: 'Enviar directamente desde su cliente de correo electrónico - útil si los destinatarios tienen filtros de spam exceso de celo',
		sendVia: 'Nuestro presentador enviará el enlace en su nombre'
	},
	mailtoCardButtonLabels: {
		sendVia: "Enviar por Security First",
		sendDirectly: "Enviar directamente"
	},
	main: {
		organicPolicyDisclaimer: "La información contenida en este video es para fines de demostración solamente",
		timeline: {
			Introduction: { start: 0, label: "Presentación", state: "START" },
			YourCoverage: { start: 16, label: "Su cobertura", state: "START" },
			ImportantToKnow: { start: 32, label: "Importante saber", state: "START" },
			Deductibles: { start: 52, label: "Los deducibles", state: "START" },
			Discounts: { start: 66, label: "Descuentos", state: "START" },
			Billing: { start: 78, label: "Facturación", state: "START" },
			Thanks: { start: 90, label: "Gracias", state: "START" }
		}
	}
};
