20.times do
  Note.create(
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph
  )
end
