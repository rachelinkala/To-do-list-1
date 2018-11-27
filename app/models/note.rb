class Note < ApplicationRecord
  validated_uniqueness_of :title
end
