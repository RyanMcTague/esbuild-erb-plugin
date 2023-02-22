#!/usr/bin/env ruby
require 'optparse'

ENV["RAILS_ENV"] ||= ENV["RACK_ENV"] || "development"

options = {}


OptionParser.new do |opt|
  opt.on('--source ERB Source Code') { |o| options[:source_code] = o }
end.parse!



begin
  require File.join(Dir.pwd, 'config' ,'environment')
rescue LoadError
  require 'erb'
end

begin
  template = ERB.new options[:source_code]
  puts template.result(binding)
rescue => e
  puts e
end

