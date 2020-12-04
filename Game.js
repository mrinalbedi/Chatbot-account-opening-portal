const ChatState = Object.freeze({
    WELCOME: Symbol("welcome"),
    CONTINUE: Symbol("continue"),
    PROVINCE_SELECTED: Symbol("province_selected"),
    CITY_SELECTED: Symbol("city_selected"),
    BANK_SELECTED: Symbol("bank_selected"),
    ACCOUNT_TYPE_SELECTED: Symbol("account_type_selected"),
    CHEQUING_SELECTED: Symbol("chequing_selected"),
    SAVINGS_SELECTED: Symbol("savings_selected")
});

module.exports = class Game {
    constructor() {
        this.stateCur = ChatState.WELCOME;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {
            case ChatState.WELCOME:
                sReply = "Welcome to the Unified Canada Bank account opening portal application? Please select CONTINUE or EXIT";
                this.stateCur = ChatState.CONTINUE;
                break;
            case ChatState.CONTINUE:
                if (sInput.toLowerCase().match("continue")) {
                    sReply = "Please select the Province you reside in.\n" +
                        "1)MB - Manitoba\n" +
                        "2)AB - Alberta\n" +
                        "3)ON - Ontario\n" +
                        "4)BC - British Columbia\n" +
                        "5)QUE - Quebec\n" +
                        "3)NL - Newfoundland and Labrador\n" +
                        "Please type in the initials of the Province to go ahead";
                    this.stateCur = ChatState.PROVINCE_SELECTED;
                } else if(sInput.toLowerCase().match("exit")){
                    sReply = "Thank you for using the portal..hope to see you again";
                    this.stateCur = ChatState.WELCOME;
                }
                else
                {
                    sReply="Please select either Continue or Exit";
                    this.stateCur=ChatState.CONTINUE;
                }
                break;
            case ChatState.PROVINCE_SELECTED:
                if (sInput.toLowerCase().match("mb")) {
                    sReply = "Your chosen province is Manitoba.." + "\n" + "Please select a city."
                        + "\n" + "1.WINNIPEG"
                        + "\n" + "2.THOMPSON";
                    this.stateCur = ChatState.CITY_SELECTED;
                } else if (sInput.toLowerCase().match("ab")) {
                    sReply = "Your chosen province is Alberta" + "\n" + "Please select a city."
                        + "\n" + "1.CALGARY"
                        + "\n" + "2.EDMONTON";
                    this.stateCur = ChatState.CITY_SELECTED;
                } else if (sInput.toLowerCase().match("on")) {
                    sReply = "Your chosen province is Ontario" + "\n" + "Please select a city."
                        + "\n" + "1.KITCHENER"
                        + "\n" + "2.TORONTO";
                    this.stateCur = ChatState.CITY_SELECTED;
                } else if (sInput.toLowerCase().match("bc")) {
                    sReply = "Your chosen province is British Columbia" + "\n" + "Please select a city."
                        + "\n" + "1.VICTORIA"
                        + "\n" + "2.DUNCAN";
                    this.stateCur = ChatState.CITY_SELECTED;
                }
                else if (sInput.toLowerCase().match("que")) {
                    sReply = "Your chosen province is Quebec" + "\n" + "Please select a city."
                        + "\n" + "1.MONTREAL"
                        + "\n" + "2.RICHMOND";
                    this.stateCur = ChatState.CITY_SELECTED;
                }
                else if (sInput.toLowerCase().match("nl")) {
                    sReply = "Your chosen province is NewFoundland and Labrador" + "\n" + "Please select a city."
                        + "\n" + "1.ST. JOHNS"
                        + "\n" + "2.MOUNT PEARL";
                    this.stateCur = ChatState.CITY_SELECTED;
                }
                
                else {
                    sReply = "Please select a valid option from the choices above!";
                    this.stateCur = ChatState.CITY_SELECTED;
                }
                break;
            case ChatState.CITY_SELECTED:
                if (sInput.toLowerCase().match("winnipeg")) {
                    sReply = "You have chosen winnipeg. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("thompson")) {
                    sReply = "You have chosen thompson. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                }
                else if (sInput.toLowerCase().match("calgary")) {
                    sReply = "You have chosen calgary. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                }
                else if (sInput.toLowerCase().match("edmonton")) {
                    sReply = "You have chosen edmonton. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                }
                else if (sInput.toLowerCase().match("kitchener")) {
                    sReply = "You have chosen kitchener. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                }
                else if (sInput.toLowerCase().match("toronto")) {
                    sReply = "You have chosen toronto. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("victoria")) {
                    sReply = "You have chosen victoria. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("duncan")) {
                    sReply = "You have chosen duncan. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("montreal")) {
                    sReply = "You have chosen montreal. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("richmond")) {
                    sReply = "You have chosen richmond. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("st. johns") || sInput.toLowerCase.match("st.johns")) {
                    sReply = "You have chosen st. johns. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else if (sInput.toLowerCase().match("mount pearl")) {
                    sReply = "You have chosen mount pearl. Please select the bank you want to open an account with"
                        + "\n" + "SCB- ScotiaBank"
                        + "\n" + "RBC- Royal bank of Canada"
                        + "\n" + "TD-td Canada trust";
                    this.stateCur = ChatState.BANK_SELECTED;
                } else {
                    sReply = "You seem to have provided the wrong choice.Please start over..";
                    this.stateCur = ChatState.WELCOME;
                }
                break;
            case ChatState.BANK_SELECTED:
                if (sInput.toLowerCase().match("scb")) {
                    sReply = "Thank you for choosing ScotiaBank. What kind of account would you like to open today"
                        + "\n" + "1.CHQ-Chequing"
                        + "\n" + "2.SAV-Savings";
                    this.stateCur = ChatState.ACCOUNT_TYPE_SELECTED;
                }
                else if (sInput.toLowerCase().match("rbc")) {
                    sReply = "Thank you for choosing RBC. What kind of account would you like to open today"
                        + "\n" + "1.CHQ-Chequing"
                        + "\n" + "2.SAV-Savings";
                    this.stateCur = ChatState.ACCOUNT_TYPE_SELECTED;
                }
                else if (sInput.toLowerCase().match("td")) {
                    sReply = "Thank you for choosing TD Bank. What kind of account would you like to open today"
                        + "\n" + "1.CHQ-Chequing"
                        + "\n" + "2.SAV-Savings";
                    this.stateCur = ChatState.ACCOUNT_TYPE_SELECTED;
                }
                else {
                    sReply = "You seem to have provided the wrong choice.Please start over..";
                    this.stateCur = ChatState.WELCOME;
                }
                break;
            case ChatState.ACCOUNT_TYPE_SELECTED:
                if (sInput.toLowerCase().match("chq")) {
                    sReply = "You have decided to open a Chequing account. Please type in your full name and phone number";
                    this.stateCur = ChatState.CHEQUING_SELECTED;
                } else if (sInput.toLowerCase().match("sav")) {
                    sReply = "You have decided to open a Savings account. Please type in your full name and phone number";
                    this.stateCur = ChatState.SAVINGS_SELECTED;
                }
                else {
                    sReply = "Please provide a valid option";
                    this.stateCur = ChatState.WELCOME;
                }
                break;
            case ChatState.CHEQUING_SELECTED:
                sReply="Thank you for providing you details. Our Associate will get back to to you shortly";
                this.stateCur=ChatState.WELCOME;
                break;
            case ChatState.SAVINGS_SELECTED:
                sReply="Thank you for providing you details. Our Associate will get back to to you shortly";
                this.stateCur=ChatState.WELCOME;
                break;
            default:
                sReply="You have entered the incorrect choice. Please check your input";
                this.stateCur=ChatState.WELCOME;
                break;
        }
        return ([sReply]);
    }
}