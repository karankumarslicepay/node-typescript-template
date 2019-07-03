import * as mongoose from 'mongoose';

const bereauSchema = new mongoose.Schema({
	"uuid":String,
	"bureauName":String,
	"creditScore": String,
	"scoringElement": [mongoose.Schema.Types.Mixed],
	"name": mongoose.Schema.Types.Mixed,
	"dob": String,
	"panId": String,
	"occupation": String,
	"income": String,
	"personalAndContactInfo": mongoose.Schema.Types.Mixed,
	"accountSummary": {
		"totalAccounts": String,
		"activeAccounts": String,
		"accountsOpened": String,
		"accountsUpdated": String,
		"zeroBalanceAccounts": String,
		"openTrades": String,
		"oldestTradeAge": String,
		"recentAccount": String,
		"oldestAccount": String, 
	},
	"creditUsageSummary": {
		"totalSanctionedAmount": String,
		"totalBalanceAmount": String,
		"totalHighCredit": String,
		"totalMonthlyPayment": String,
		"singleHighestSanctionedAmount": String,
		"singleHighestBalance": String,
		"singleHighestCredit": String,
		"averageOpenBalance": String,
	},
	"delinquencySummary": {
		"noOfDelinquentAccounts": String,
		"noOfPastDueAccounts": String,
		"totalPastDueAmount": String,
		"mostSevereStatusInPast24Months": String,
		"noOfWriteoffAccounts": String,
		"allLinesEverWrittenOffIn6Months": String,
		"allLinesEverWrittenOffIn9Months": String,
		"allLinesEverWrittenOff": String,
	},
	"totalInquiry": String,
    "recentInquiry": String,
    "past30DaysInquiry": String,
    "past12monthsInquiry": String,
    "past24MonthsInquiry": String,
    "inquiryPurpose": String,
    "enquiries": [mongoose.Schema.Types.Mixed],
    "accountDetails":[mongoose.Schema.Types.Mixed],
	"error": mongoose.Schema.Types.Mixed,
	"maxedOutCL":[mongoose.Schema.Types.Mixed],
	"diRatio": String,
	"delinquentEver":Boolean,
	"bureauInsightsParameters":Boolean,
	"currentLimitUtilisation":[mongoose.Schema.Types.Mixed]
}, { timestamps: true });

bereauSchema.index({uuid: 1});
bereauSchema.index({bureauName: 1});

const Bureau = mongoose.model("Bureau", bereauSchema, 'bureau');

export default Bureau;
