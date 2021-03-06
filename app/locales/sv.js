export default {
  swithchToLanguageString: 'English',
  statuses: {
    status_1: 'Ledigt',
    status_2: 'Upptaget',
    status_3: 'Upptaget - väntar på kvittering',
    status_4: 'Upptaget',
    status_5: 'Upptaget',
  },
  header: {
    title: 'Boka grupprum'
  },
  mainNav: {
    nav1: 'Boka grupprum',
    nav2: 'Kvittera och avboka',
    nav3: 'Logga ut'
  },
  filter: {
    dropdown: {
      libraries: {
        prompt: 'Välj bibliotek'
      },
      dates: {
        prompt: 'Välj dag'
      }
    },
    pleaseSelectPromptText: 'Välj var och när du vill boka',
    noResultForActiveFilter: 'Inga tillgängliga rum hittades',

    dateStrings: {
      dateFormatString: 'dddd D MMMM',
      today: 'idag',
      tomorrow: 'imorgon'
    },

  },
  room: {
      meta: {
        seats: 'platser', // will result in 2 seat(s)
        computer: 'dator',
        whiteboard: 'whiteboard'
      },
      listOfRoomsHeader: 'Lediga rum på',
    },
    backToListOfRoomsNav: 'Alla rum',
    closeButton: 'Stäng',

    statusStrings: {
      booked: 'Bokat',
      available: 'Ledigt'
    },

    loginForm: {
      outletHeader: "Logga in",
      header: 'Boka det här rummet',
      patrionCardNumber: 'Nummer på GU-kort *',
      patrionCardNumberExample: '3300776403',
      personalSecurityNumber: 'Personnummer *',
      personalSecurityNumberExample: 'ååmmddnnnn (10 tecken)',
      signature: 'Signatur *',
      signatureExample: 'Exempel: Albert',
      bookButton: 'Boka',
      okButton: 'OK',
      forgetMeLink: 'Detta är inte jag, rensa uppgifterna'
    },

    myBookings: {
      headerMyConfirmableBookings: 'Kan kvitteras',
      headerMyConfirmedBookings: 'Pågående och kvitterade',
      headerMyBookings: 'Bokningar',
      cancelBookingButton: 'Avboka',
      confirmBookingButton: 'Kvittera',
      noBookingsMessage: 'Du har inga bokningar',
      countdownStrings: {
        startInBefore: 'Startar',
        startInAfter: 'minuter',
        startedAgoBefore: 'Startade',
        startedAgoAfter: 'minuter sedan',
      },
    },
    error: {
      passUnavail: 'Tyvärr, det här rummet är inte längre tillgängligt. Någon hann före dig.',
      passLimitError: 'Du har redan bokat 2 pass idag, och får tyvärr inte boka fler.',
      checkLoginInformation: 'Kontrollera uppgifterna!',
    },
    success: {
      bookSuccess: 'Du har bokat rummet.',
      cancelBookingSuccess: 'Du har avbokat rummet.',
      confirmSuccess: 'Du har kvitterat rummet.',
    }



};
