class Note < ApplicationRecord
  validates_uniqueness_of :title
end
