#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"

#include "CursosPointer.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::heatCoreApp::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder, true);
}

} // namespace winrt::heatCoreApp::implementation
