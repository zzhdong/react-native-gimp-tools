
Pod::Spec.new do |s|
  s.name         = "RNGimpTools"
  s.version      = "1.0.0"
  s.summary      = "RNGimpTools"
  s.description  = <<-DESC
                  RNGimpTools
                   DESC
  s.homepage     = "https://github.com/zzhdong/react-native-gimp-tools"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNGimpTools.git", :tag => "master" }
  s.source_files  = "RNGimpTools/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  