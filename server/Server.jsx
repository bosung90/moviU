Meteor.startup(()=>{
	Accounts.onCreateUser((options, user)=>{
		Students.insert({rewards: 0, rating: 0, userId: user._id})
	  if (options.profile)
	    user.profile = options.profile
	  return user
	})
})
