exports.create = (params, hash) => ({
  name: params.name,
  birthDate: params.birth_date,
  password: hash,
  email: params.email,
  type: params.type,
  country: params.country,
  state: params.state,
  city: params.city,
  address: params.address,
  emailSubscription: params.email_subscription,
  numberOfLanguages: params.number_of_languages
});
