local result = nil

exports('skillCheck', function()
    result = nil
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = 'start'
    }) 
    while result == nil do 
        Wait(100)
    end
    SetNuiFocus(false, false)
    return result
end)

RegisterNUICallback('GetResult', function(data, cb)
    result = data
    cb()
end)